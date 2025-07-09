<?php

namespace Modules\File\Facades;

use Illuminate\Support\Facades\Facade;

class UploadService extends Facade
{
    public static function getFacadeAccessor()
    {
        return 'UploadService';
    }
}
