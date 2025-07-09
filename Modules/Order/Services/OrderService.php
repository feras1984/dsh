<?php

namespace Modules\Order\Services;

use Carbon\Carbon;
use Faker\Provider\Address;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Support\Facades\Auth;
use Modules\Order\Entities\ItemOffer;
use Modules\Order\Entities\Order;
use Modules\Order\Entities\OrderAddress;
use Modules\Order\Entities\OrderDetail;
use Modules\Order\Entities\OrderDiscount;
use Modules\Order\Entities\OrderDiscountView;
use Modules\Order\Events\InvoiceEvent;
use Modules\Order\Services\Filter\EndDate;
use Modules\Order\Services\Filter\HigherPrice;
use Modules\Order\Services\Filter\LimitFilter;
use Modules\Order\Services\Filter\LowerPrice;
use Modules\Order\Services\Filter\OffsetFilter;
use Modules\Order\Services\Filter\OrderStatus;
use Modules\Order\Services\Filter\PaidOrder;
use Modules\Order\Services\Filter\RevenueFilter;
use Modules\Order\Services\Filter\SearchFilter;
use Modules\Order\Services\Filter\CountFilter;
use Modules\Order\Services\Filter\StartDate;
use Modules\Product\Facades\ProductService;
use Modules\User\Entities\User;
use Modules\User\Facades\UserService\CustomerService\Normal\NormalService;
use Modules\User\Facades\UserService\UserService;

class OrderService
{
    private ?Authenticatable $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function mapDiscountModel(OrderDiscount $discount) {
        return [
            'id' => $discount->id,
            'type' => $discount->type,
            'code' => $discount->code,
            'isPercent' => $discount->is_percent,
            'amount' => $discount->amount,
        ];
    }

    public function mapOfferModel(ItemOffer $offer) {
        return [
            'id' => $offer->id,
            'name' => $offer->name,
            'type' => $offer->type,
            'isPercent' => (bool)$offer->is_percent,
            'amount' => $offer->amount,
        ];
    }

    public function mapAddressModel(OrderAddress $address) {
        return [
            'id' => $address->id,
            'name' => $address->name,
            'email' => $address->email,
            'mobile' => $address->mobile,
            'longitude' => $address->longitude,
            'latitude' => $address->latitude,
            'buildingName' => $address->building_name,
            'floorNumber' => $address->floor_number,
            'state' => $address->state,
        ];
    }

    public function mapDetailModel(OrderDetail $detail) {
        $product = ProductService::mapLocaleProduct($detail->product()->first());
        $offer = $detail->offer()->first();
        $offerModel = null;
        if (!is_null($offer)) {
            $offerModel = $this->mapOfferModel($offer);
        }
        return [
            'id' => $detail->id,
            'product' => $product,
            'quantity' => $detail->quantity,
            'price' => $detail->unit_price,
            'offer' => $offerModel,
        ];
    }

    public function mapOrderModel(Order $order) {
        $user = User::query()->where('id', $order->user_id)->first();
        $details= $order->details()->get();
        $address = $order->address()->first();
        $discount = $order->discount()->first();
        $discountModel = null;
        if (!is_null($discount)) {
            $discountModel = $this->mapDiscountModel($discount);
        }
        $basicData = [
            'id' => $order->id,
            'transactionNumber' => $order->transaction_number,
            'referenceToken' => $order->reference_token,
            'totalPrice' => $order->total_price,
            'status' => $order->status,
            'currency' => $order->currency,
            'isPaid' => (bool)$order->is_paid,
            'discount' => $discountModel,
            'paymentDate' => Carbon::make($order->payment_date)->format('d M, Y'),
            'createdAt' => Carbon::make($order->created_at)->format('d M, Y'),
        ];

        $itemsModel = [];
        foreach ($details as $detail) {
            $itemsModel[] = $this->mapDetailModel($detail);
        }

        return [

            'order' => $basicData,
            'items' => $itemsModel,
            'address' => $this->mapAddressModel($address),
            'user' => NormalService::mapUserShort($user),
        ];
    }

    public function getItemPrice(int $itemId) {
        $item = OrderDetail::query()->where('id', $itemId)->first();
        $offer = $item->offer()->first();
        if (is_null($offer)) return $item->unit_price;
        else {
            if ($offer->is_percent) {
                return $item->unit_price * (1 - $offer->amount / 100);
            } else {
                return $item->unit_price - $offer->amount;
            }
        }
    }

    public function getOrderDiscount(int $orderId) {
        $order = Order::query()->where('id', $orderId)->with('discount')->first();
        $discount = $order->discount;

        if (is_null($order->discount)) return 0;
        else {
            if ($order->discount->is_percent) {
                return $order->total_price * $discount->amount / 100;
            } else {
                return $discount->amount;
            }
        }
    }

    public function getOrdersByUser($userId): array
    {
        $orders = Order::query()
            ->where('user_id', $userId)
            ->orderBy('created_at', 'Desc')
            ->get();
        $ordersModel = [];
        foreach ($orders as $order) {
            $ordersModel[] = $this->mapOrderModel($order);
        }

        return $ordersModel;
    }

    public function getOrders(): array
    {
        $orders = Order::query()
            ->orderBy('created_at', 'Desc')
            ->get();
        $ordersModel = [];
        foreach ($orders as $order) {
            $ordersModel[] = $this->mapOrderModel($order);
        }

        return $ordersModel;
    }

    public function getAdminOrders(): array
    {
        $orders = app(Pipeline::class)
            ->send(Order::query())
            ->through([
                LimitFilter::class,
                OffsetFilter::class,
                PaidOrder::class,
                SearchFilter::class,
                LowerPrice::class,
                HigherPrice::class,
                StartDate::class,
                EndDate::class,
                OrderStatus::class,
            ])
            ->thenReturn()->get();
        $ordersModel = [];
        foreach ($orders as $order) {
            $ordersModel[] = $this->mapOrderModel($order);
        }

        return $ordersModel;
    }

    public function getOrdersCount() {
        return app(Pipeline::class)
            ->send(Order::query())
            ->through([
                CountFilter::class,
            ])
            ->thenReturn();
    }

    private function fillOrderForm(Order &$order, $payment, $totalPrice) {
        $order->fill([
            'user_id' => $this->user->id,
            'transaction_number' => $payment->transactionNumber,
            'reference_token' => $payment->referenceToken,
            'total_price' => $totalPrice,
            'status' => 'pending',
            'currency' => $payment->currency,
            'is_paid' => $payment->isPaid,
            'payment_date' => Carbon::now(),
        ]);

        return $order;
    }

    private function fillOrderAddress(OrderAddress &$address, $billing, $orderId) {
        $address->fill([
            'order_id' => $orderId,
            'user_id' => $this->user->id,
            'name' => $billing->name,
            'longitude' => $billing->longitude,
            'latitude' => $billing->latitude,
            'email' => $billing->email,
            'mobile' => $billing->mobile,
            'building_name' => $billing->buildingName,
            'floor_number' => $billing->floorNumber,
            'state' => $billing->addressDetails,
        ]);

        return $address;
    }

    private function fillOrderDetail(OrderDetail $detail, $item, $orderId) {
        $detail->fill([
            'order_id' => $orderId,
            'product_id' => $item->productId,
            'quantity' => $item->quantity,
            'unit_price' => $item->unitPrice,
            'currency' => $item->currency,
        ]);

        return $detail;
    }

    private function fillItemOffer($offer, int $detailId) {
        $itemOffer = new ItemOffer();
        $itemOffer->fill([
            'order_details_id' => $detailId,
            'name' => $offer->name ?? '',
            'type' => $offer->type ?? '',
            'is_percent' => $offer->isPercent,
            'amount' => $offer->amount,
        ]);
        $itemOffer->save();
    }

    private function fillOrderItems($items, $orderId) {
        foreach ($items as $item) {
            $detail = new OrderDetail();
            $this->fillOrderDetail($detail, $item, $orderId);
            $detail->save();
            if (!is_null($item->offer)) {
                $this->fillItemOffer($item->offer, $detail->id);
            }
        }
    }

    private function fillOrderDiscount(int $orderId, $data) {
        $discount = new OrderDiscount();
        $discount->fill([
            'order_id' => $orderId,
            'type' => 'coupon',
            'code' => $data->code,
            'is_percent' => $data->isPercent,
            'amount' => $data->amount,
        ]);
        $discount->save();
    }

    public function storeOrder($data) {
        $items = json_decode($data['items']);
        $billing = json_decode($data['billing']);
        $payment = json_decode($data['payment']);
        $coupon = array_key_exists('coupon', $data) ? json_decode($data['coupon']) : null;
        $totalPrice = $data['totalPrice'];

        $order = new Order();
        $address = new OrderAddress();

        $this->fillOrderForm($order, $payment, $totalPrice);
        $order->save();

        $this->fillOrderAddress($address, $billing, $order->id);
        $address->save();

        $this->fillOrderItems($items, $order->id);

        if (!is_null($coupon)) {
            $this->fillOrderDiscount($order->id, $coupon);
        }

        //Handle Products in products table (count, total sales).
        ProductService::handleOrderItems($items);

        //Send Invoice notification!
        event(new InvoiceEvent($order));
    }

    public function setOrderAsPaid(Order $order, $status) {
        $order->is_paid = $status;
        $order->update();
    }

    public function changeOrderStatus(Order $order, $status) {
        $order->status = $status;
        $order->update();
    }

    public function totalPrice() {
//        return app(Pipeline::class)
//            ->send(Order::query())
//            ->through([
//                RevenueFilter::class,
//            ])
//            ->thenReturn();
        return OrderDiscountView::query()->sum('actual_price');
    }

    public function timeline() {
//        $orders = OrderDiscountView::query()->get();
//        $orderDates = [];
//        foreach ($orders as $order) {
//            $orderDates[] = ['price' => $order->actual_price, 'date' => $order->created_at];
//        }
//
//        return $orderDates;
        $currentYear = Carbon::now()->year;
        $orders = OrderDiscountView::query()
            ->whereYear('created_at', $currentYear)
            ->orderBy('created_at', 'ASC')
            ->get()
            ->groupBy(function ($order) {
                return $order->created_at->format('Y, M');
            })
            ->map(function ($orders, $month) {
                $totalRevenue = $orders->sum('actual_price');
                return ['month' => $orders[0]->created_at, 'totalRevenue' => $totalRevenue];
            });

//        dd($orders->map(function ($key, $value) {
//            return $key[0];
//        }));
        $ordersModel = [];
        foreach ($orders as $key => $value) {
            $ordersModel[] = $value;
        }

//        dd($ordersModel);

        return $ordersModel;
    }
}
