<?php

namespace Modules\Order\Emails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
use Modules\Order\Entities\Order;
use Modules\Order\Facades\OrderService;

class InvoiceMail extends Mailable
{
    use Queueable, SerializesModels;

    private array $order;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Order $order)
    {
        $this->order = OrderService::mapOrderModel($order);
    }

    /**
     * Get the message envelope.
     */
    public function envelope (): Envelope {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            subject: "Invoice Notification",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content () : Content {

        return new Content(
            markdown: 'order::emails.invoice',
            with: [
                'order' => $this->order,
            ],
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
