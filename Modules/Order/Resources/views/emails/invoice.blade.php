@php
//dd($order);
    $totalPrice = $order['order']['totalPrice'];
    $discount = \Modules\Order\Facades\OrderService::getOrderDiscount($order['order']['id']);
@endphp

    <!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invoice Message</title>
    <style type="text/css">
        p {
            margin: 0;
            line-height: 1.5;
        }

        .align-horizontal {
            display: flex;
            justify-content: start;
            align-items: center;
        }

        .flex-100 {
            flex-basis: 100px;
        }

        .flex-200 {
            flex-basis: 200px;
        }

        .flex-400 {
            flex-basis: 400px;
        }

        .mt-16 {
            margin-top: 16px;
        }

        .mb-16 {
            margin-bottom: 16px;
        }

        .font-bold {
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div
        style="padding: 16px;"
    >
        <div
            style="width: 100px;
                        height: 100px;
                        margin: 0;
                        padding: 0;"
        >
            <img
                src="{{asset('/file/logo')}}"
                alt="{{config('app.name')}}"
                style="width: 100px;
                           height: 100px;"
            >
        </div>
        <br />
        <h3>Greeting {{$order['user']['name']}}</h3>
        <p>
            We appreciate your trust. This is your invoice!
        </p>

        <div class="mt-16 mb-16">
            <div class="align-horizontal ">
                <p class="font-bold flex-200">Invoice Number</p>
                <p>#{{$order['order']['id']}}</p>
            </div>

            <div class="align-horizontal ">
                <p class="font-bold flex-200">Invoice Date</p>
                <p>{{$order['order']['createdAt']}}</p>
            </div>

            <div class="align-horizontal ">
                <p class="font-bold flex-200">Payment Status</p>
                <p>{{$order['order']['isPaid'] ? 'Paid' : 'Unpaid'}}</p>
            </div>

            <div class="align-horizontal ">
                <p class="font-bold flex-200">Order Status</p>
                <p style="text-transform: capitalize;">{{$order['order']['status']}}</p>
            </div>

            <div class="align-horizontal ">
                <p class="font-bold flex-200">Location</p>
                <p>{{$order['address']['state']}}</p>
            </div>
        </div>

        <div class="mb-16 mt-16">
            <h3 class="font-bold">Items:</h3>
        </div>

        @foreach($order['items'] as $item)
            @php
                $product = $item['product'];
                $quantity = $item['quantity'];

            @endphp
        <div class="align-horizontal">
            <div class="flex-200">
                <p class="font-bold"> {{$product['name']}}</p>
            </div>
            <div class="flex-200">
                <p>{{$quantity}} {{$quantity === 1 ? 'item' : 'items'}}</p>
            </div>
            <div class="flex-200">
                <p>{{$quantity * \Modules\Order\Facades\OrderService::getItemPrice($item['id'])}} AED</p>
            </div>
        </div>

        @endforeach

        <div class="mt-16 mb-16">
            <div class="align-horizontal">
                <p class="font-bold flex-200">Net Price</p>
                <p>{{$totalPrice}} AED</p>
            </div>

            <div class="align-horizontal">
                <p class="font-bold flex-200">Discount</p>
                <p>{{$discount}} AED</p>
            </div>

            <div class="align-horizontal">
                <p class="font-bold flex-200">Total Price</p>
                <p>{{$totalPrice - $discount}} AED</p>
            </div>
        </div>

        <h3>Best Regards From {{config('app.name')}}</h3>
    </div>
</body>
</html>
