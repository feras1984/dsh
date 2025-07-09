<?php

namespace Modules\User\Emails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public string $url;
    public string $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($url, $name)
    {
        $this->url = $url;
        $this->name = $name;
    }

    /**
     * Get the message envelope.
     */
    public function envelope (): Envelope {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            subject: "Reset Password Notification",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content () : Content {

        return new Content(
            markdown: 'user::emails.resetPassword',
            with: [
                'name' => $this->name,
                'url' => $this->url,
            ],
        );
    }

//    /**
//     * Build the message.
//     *
//     * @return $this
//     */
//    public function build()
//    {
//        return $this->view('view.name');
//    }
}
