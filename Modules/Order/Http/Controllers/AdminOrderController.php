<?php

namespace Modules\Order\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Order\Entities\Order;
use Modules\Order\Facades\OrderService;
use Symfony\Component\HttpFoundation\Response;

class AdminOrderController extends Controller
{
    /**
     * Display a listing of the resource.
//     * @return Renderable
     */
    public function index(): \Inertia\Response
    {
        $count = OrderService::getOrdersCount();
        return Inertia::render('Admin/Order/OrderContainer', [
            'count' => $count,
        ]);
    }

    public function list(): JsonResponse
    {
        $orders = OrderService::getAdminOrders();
        return response()->json($orders);
    }

    public function count(): JsonResponse
    {
        return \response()->json(OrderService::getOrdersCount());
    }

    public function totalPrice(): JsonResponse
    {
        return \response()->json(OrderService::totalPrice());
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('order::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('order::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $order
     * @return \Inertia\Response
     */
    public function edit(Order $order): \Inertia\Response
    {
        return Inertia::render('Admin/Order/OrderDetails', [
            'order' => OrderService::mapOrderModel($order),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }

    public function paid(Order $order, Request $request): JsonResponse
    {
        try {
            if ($request->has('paymentStatus')) {
                OrderService::setOrderAsPaid($order, $request->get('paymentStatus'));
                return \response()->json(OrderService::mapOrderModel($order));
            } else {
                return \response()->json([
                    'status' => 'error',
                    'message' => 'Payment Status is not recognized'
                ], Response::HTTP_BAD_REQUEST);
            }
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error happened while changing payment status!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function status(Order $order, Request $request): JsonResponse
    {
        try {
            if ($request->has('orderStatus')) {
                OrderService::changeOrderStatus($order, $request->get('orderStatus'));
                return \response()->json(OrderService::mapOrderModel($order));
            } else {
                return \response()->json([
                    'status' => 'error',
                    'message' => 'Order Status is not recognized'
                ], Response::HTTP_BAD_REQUEST);
            }
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error happened while changing order status!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function timeline(): JsonResponse
    {
        return \response()->json(OrderService::timeline());
    }
}
