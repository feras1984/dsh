<?php

namespace Modules\User\Contracts;

use Illuminate\Database\Eloquent\Relations\HasMany;

interface IUserProductActivities
{
    public function likes(): HasMany;
    public function favorites(): HasMany;
    public function reviews(): HasMany;
    public function rates(): HasMany;
}
