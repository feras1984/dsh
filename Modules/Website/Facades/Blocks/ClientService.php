<?php

namespace Modules\Website\Facades\Blocks;

use Illuminate\Support\Facades\Facade;

class ClientService extends Facade
{
    protected static function getFacadeAccessor(): string
    { return 'ClientService'; }
}
