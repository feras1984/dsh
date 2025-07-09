<?php

namespace Modules\User\Listeners;

use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Mail;
use Modules\User\Emails\UserRegistrationMail;
use Modules\User\Events\UserRegistrationEvent;

class UserRegistrationListener
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
    public function handle(UserRegistrationEvent $event)
    {
        Mail::to($event->email)->send(new UserRegistrationMail($event->name, $event->email));
    }
}
