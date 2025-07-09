<?php

namespace Modules\User\Emails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class UserRegistrationMail extends Mailable
{
    use Queueable, SerializesModels;

    private string $name;
    private string $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $name, string $email)
    {
        $this->name = $name;
        $this->email = $email;
    }

    /**
     * Get the message envelope.
     */
    public function envelope (): Envelope {
        return new Envelope(
            from: new Address(config('mail.from.address'), config('mail.from.name')),
            subject: "New Registration Notification",
        );
    }

    /**
     * Get the message content definition.
     */
    public function content () : Content {

        return new Content(
            markdown: 'user::emails.userregistrationview',
            with: [
                'name' => $this->name,
                'email' => $this->email,
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

    /**
     * Build the message.
     *
     * @return $this
     */
//    public function build()
//    {
//        return $this->markdown('user::emails.userregistrationview', [
//            'name' => $this->name,
//            'email' => $this->email,
//        ]);
//    }
}
