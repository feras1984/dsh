<?php

namespace Modules\User\UserService\CustomerService\Normal;

use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Auth;
use Modules\User\Entities\CustomerView;
use Modules\User\Entities\User;
use Modules\User\UserService\CustomerService\CustomerService;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Validator;
use Modules\User\Entities\Customer;
use Modules\User\UserService\Filter\CountFilter;
use Modules\User\UserService\Filter\LimitFilter;
use Modules\User\UserService\Filter\OffsetFilter;
use Modules\User\UserService\Filter\SearchFilter;
use Illuminate\Pipeline\Pipeline;

class NormalService extends CustomerService
{
    public const HOME = '/';
    public const TYPE = 'Modules\User\Entities\Customer';
    public function __construct()
    {
        $this->data = request()->all();
    }

    /*
     * Get Customer model based on User model:
     */
    public function mapUserModel(User $user) {
        $userInfo = parent::mapUserModel($user);
        $normalInfo = [
            'type' => 'normal',
            'name' => $user->userable()->first()->name,
        ];

        return [...$userInfo, ...$normalInfo];
    }

    /*
     * Get Customer model based on customers_view:
     */
    public function mapCustomerViewModel(CustomerView $customerView) {
        $user = $customerView->user()->first();
        $view = [
            'id' => $customerView->user_id,
            'email' => $customerView->email,
            'avatar' => parent::getAvatar($user),
            'isActive' => (bool)$customerView->is_active,
            'type' => 'normal',
            'name' => $customerView->name,
            'createdAt' => Carbon::make($user->created_at)->format('M d, Y'),
        ];
        $activities = parent::getUserActivities($user);
        return [...$view, ...$activities];
    }

    public function mapUserShort(User $user)
    {
        $userInfo = parent::mapUserShort($user);
        return [
            ...$userInfo,
            'name' => $user->userable()->first()->name,
            'type' => 'normal',
        ];
    }

    public function mapUserListActivities(Collection $users): array
    {
//        dd(Carbon::make($users[0]->updated_at)->format('M d, Y'));
        $usersModel = [];
        foreach ($users as $user) {
            $usersModel[] = [
                ...$this->mapUserShort($user),
                'updatedAt' => Carbon::make($user->pivot->created_at)->format('M d, Y')
            ];
        }
        return $usersModel;
    }

    public function mapUserListRating(Collection $users): array
    {
        $usersModel = [];
        foreach ($users as $user) {
            $usersModel[] = [
                ...$this->mapUserShort($user),
                'updatedAt' => Carbon::make($user->pivot->created_at)->format('M d, Y'),
                'rating' => $user->pivot->rate,
            ];
        }
        return $usersModel;
    }

    public function mapUserListReviews(Collection $users): array
    {
        $usersModel = [];
        foreach ($users as $user) {
            $usersModel[] = [
                ...$this->mapUserShort($user),
                'updatedAt' => Carbon::make($user->pivot->created_at)->format('M d, Y'),
                'review' => $user->pivot->review,
                'reviewId' => $user->pivot->id,
                'isActive' => (bool)$user->pivot->is_active,
            ];
        }
        return $usersModel;
    }

    protected function validator(): \Illuminate\Validation\Validator
    {
        return Validator::make($this->data, [
            'name' => ['required', 'string', 'min:3'],
        ]);
    }

    public function store()
    {
        //TODO: Validate from current class.
        $customer = Customer::create([
            'name' => $this->data['name'],
        ]);

        $customer->save();
        $this->id = $customer->id;

        parent::store();
    }

    public function update(FormRequest $request): void
    {
        parent::update($request);
        $request->user()->userable->fill([
            'name' => $request->name,
        ]);
        $request->user()->userable->update();
    }

    public function updateProfile($data) {
        $customer = Auth::user()->userable()->first();
        $customer->fill([
            'name' => $data['name'],
        ]);
        $customer->update();
        parent::update($data);
    }

    public function getName(User $user)
    {
        return $user->userable()->first()->name;
        // TODO: Implement getName() method.
    }

    public function getCustomers() {
        $customers = app(Pipeline::class)
            ->send(CustomerView::query())
            ->through([
                LimitFilter::class,
                OffsetFilter::class,
                SearchFilter::class,
            ])->thenReturn()->get();

        $customersModel = [];
        foreach ($customers as $customer) {
            $customersModel[] = $this->mapCustomerViewModel($customer);
        }
        return $customersModel;
    }

    public function getCustomersCount() {
        return app(Pipeline::class)
            ->send(CustomerView::query())
            ->through([
                CountFilter::class,
            ])
            ->thenReturn();
    }
}
