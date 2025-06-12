<?php

namespace Modules\Setting\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Modules\Setting\Entities\Language;

class SettingDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
//        Model::unguard();
        $languages = Language::factory()->count(2)
            ->sequence(
                [
                    'name' => 'Arabic',
                    'code' => 'ar',
                    'flag_code' => 'ae',
                    'level_order' => 1,
                    'direction' => 'rtl',
                    'is_active' => true,
                ],
                [
                    'name' => 'English',
                    'code' => 'en',
                    'flag_code' => 'gb',
                    'level_order' => 2,
                    'is_active' => true,
                ],
            )
            ->create();

        // $this->call("OthersTableSeeder");
    }
}
