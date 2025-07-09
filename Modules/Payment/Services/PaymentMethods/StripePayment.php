<?php

namespace Modules\Payment\Services\PaymentMethods;

use Modules\Payment\Services\PaymentService;
use Stripe\Exception\ApiErrorException;
use Stripe\PaymentIntent;
use Stripe\Stripe;

class StripePayment extends PaymentService
{
    public function __construct()
    {
        Stripe::setApiKey(config('payment.stripe.secret_key'));
    }

    public function getPaymentInfo()
    {
        // TODO: Implement getPaymentInfo() method.
    }

    /**
     * @throws ApiErrorException
     */
    public function getIntent($data) {
        $intent = PaymentIntent::create([
            'amount' => $data['amount'],
            'currency' => $data['currency'],
        ]);

        return $intent->client_secret;
    }
}
