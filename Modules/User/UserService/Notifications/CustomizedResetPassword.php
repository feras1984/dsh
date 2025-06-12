<?php

namespace Modules\User\UserService\Notifications;

use Illuminate\Auth\Notifications\ResetPassword;
use Modules\User\Emails\ResetPasswordMail;

class CustomizedResetPassword extends ResetPassword
{
    private string $name;
    private string $email;

    public function __construct($token, $name, $email)
    {
        $this->name = $name;
        $this->email = $email;
        parent::__construct($token);
    }

    public function buildMailMessage($url): ResetPasswordMail
    {
        return (new ResetPasswordMail($url, $this->name))->to($this->email);
    }
}
