<?php

namespace Modules\File\Facades;

use Illuminate\Support\Facades\Facade;

class FileService extends Facade
{
    public static function getFacadeAccessor(): string
    {
        return 'FileService';
    }
}
