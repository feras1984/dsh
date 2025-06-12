<?php

namespace Modules\Marketing\Services\Coupon;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pipeline\Pipeline;
use Modules\Marketing\Entities\Coupon;
use Modules\Marketing\Services\Filter\CountFilter;

class CouponService
{
    public function mapCouponModel(Coupon $coupon): array
    {
        return [
            'id' => $coupon->id,
            'code' => $coupon->code,
            'amount' => $coupon->amount,
            'isPercent' => (bool)$coupon->is_percent,
            'startDate' => $coupon->start_date,
            'endDate' => $coupon->end_date,
            'isActive' => (bool)$coupon->is_active,
            'valid' => Carbon::parse($coupon->end_date) > Carbon::now(),
        ];
    }

    public function getCoupons(): array
    {
        $coupons = Coupon::query()->orderBy('updated_at', 'DESC')->get();
        $couponsModel = [];
        foreach ($coupons as $coupon) {
            $couponsModel[] = $this->mapCouponModel($coupon);
        }

        return $couponsModel;
    }

    public function getCouponsCount () {
        return app(Pipeline::class)
            ->send(Coupon::query())
            ->through([
                CountFilter::class,
            ])
            ->thenReturn();
    }

    public function getActiveCoupons(): array
    {
        $coupons = Coupon::query()
            ->whereIsActive(1)
            ->where('start_date', '=<', Carbon::now())
            ->where('end_date', '>=', Carbon::now())
            ->get();
        $couponsModel = [];
        foreach ($coupons as $coupon) {
            $couponsModel[] = $this->mapCouponModel($coupon);
        }

        return $couponsModel;
    }

    private function fillCouponForm(Coupon &$coupon, array $data): void
    {

        $coupon->fill([
            'code' => $data['code'],
            'is_active' => array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1,
            'is_percent' => $data['isPercent'] === 'true',
            'amount' => $data['amount'],
            'start_date' => Carbon::make($data['startDate']),
            'end_date' => Carbon::make($data['endDate']),
        ]);
    }

    public function storeCoupon(array $data): array
    {
        $coupon = new Coupon();
        $this->fillCouponForm($coupon, $data);
        $coupon->save();
        return $this->mapCouponModel($coupon);
    }

    public function updateCoupon(array $data, Coupon $coupon): array
    {
        $this->fillCouponForm($coupon, $data);
        $coupon->update();
        return $this->mapCouponModel($coupon);
    }

    public function activateCoupon(array $data, Coupon $coupon): array
    {
        $coupon->is_active = array_key_exists('isActive', $data) ? $data['isActive'] === 'true' : 1;
        $coupon->update();
        return $this->mapCouponModel($coupon);
    }

    public function deleteCoupon(Coupon $coupon): void
    {
        $coupon->delete();
    }

    public function checkCoupon(array $data): Model|Builder|null
    {
        return Coupon::query()->where('code', $data['code'])->first();
    }

    public function isValidCoupon(Coupon $coupon): bool
    {
        return Carbon::parse($coupon->start_date) <= Carbon::now() && Carbon::parse($coupon->end_date) >= Carbon::now();
    }

    public function isActiveCoupon(Coupon $coupon): bool
    {
        return $coupon->is_active;
    }
}
