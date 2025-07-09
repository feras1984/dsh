<?php

namespace Modules\Order\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;
use Modules\Order\Emails\InvoiceMail;
use Modules\Order\Events\InvoiceEvent;

class InvoiceListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(InvoiceEvent $event)
    {
        Mail::to($event->order->user()->first()->email)->send(new InvoiceMail($event->order));
    }
}
