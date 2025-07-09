<?php

namespace Modules\User\Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Modules\User\Database\factories\CustomerFactory;
use Modules\User\Entities\Admin;
use Modules\User\Entities\Customer;
use Modules\User\Entities\User;
use Modules\User\Enums\AdminEnum;

class UserDatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

//        $customerFactory = CustomerFactory::factoryForModel('Customer');
//        $customerFactory = Customer::factory()->create([
//            'name' => 'Alice Turner',
//        ]);

        $adminFactory = Admin::factory()->create([
            'first_name' => 'Admin',
            'last_name' => 'Admin',
            'role' => AdminEnum::ADMIN->value,
        ]);

//        $userForCustomer = User::factory()->create([
//            'userable_id' => $customerFactory->id,
//            'userable_type' => get_class($customerFactory),
//            'email' => 'alice@email.com',
////            'avatar',
//            'is_active' => true,
//            'password' => Hash::make('hello1234'),
//        ]);

        $userForAdmin = User::factory()->create([
            'userable_id' => $adminFactory->id,
            'userable_type' => get_class($adminFactory),
            'email' => 'admin@teramediasolution.com',
//            'avatar',
            'is_active' => true,
            'password' => Hash::make('T!1ame@2eM#3Na'),
        ]);

        // $this->call("OthersTableSeeder");
    }
}
