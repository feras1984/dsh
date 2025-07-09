<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    <title>New Registration</title>
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
        <h3>Greeting {{$name}}</h3>
        <p>
            You have received this message in response to your successful registration in our application.
            We wish you a happy shopping.

        </p>

        <div
            style="margin: 16px auto;"
        >
            <a
                href="{{config('app.url')}}"
                target="_blank"
                style="background-color: #00adee;
                color: #ffffff;
                padding: 8px 16px;
                text-decoration: none;
                border-radius: 3px;
                /*box-shadow: -1px -1px 8px 1px rgba(0,0,0,.75) !important;*/
                box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;"
            >Visit Website</a>
        </div>

        <br />

        <h3>Best Regards From {{config('app.name')}}</h3>
    </div>
</body>
</html>
