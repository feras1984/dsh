<?php

namespace Modules\Marketing\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Js;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Marketing\Entities\Coupon;
use Modules\Marketing\Facades\Coupon\CouponService;

class AdminCouponController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index(): Response
    {
//        return view('marketing::index');
        $coupons = CouponService::getCoupons();
        $count = CouponService::getCouponsCount();
        return Inertia::render('Admin/Marketing/Coupon/CouponContainer', [
            'coupons' => $coupons,
            'count' => $count,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Response
     */
    public function create()
    {
        return Inertia::render('Admin/Marketing/Coupon/Partials/CouponAdd/CouponAdd');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $data = $request->all();
            return response()->json(CouponService::storeCoupon($data));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while storing coupon!',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Response
     */
    public function show(Coupon $coupon)
    {
//        return Inertia::render('Admin/Marketing/Coupon/Partials/CouponUpdate/CouponUpdate', [
//            'coupon' => CouponService::mapCouponModel($coupon),
//        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Response
     */
    public function edit(Coupon $coupon)
    {
        return Inertia::render('Admin/Marketing/Coupon/Partials/CouponUpdate/CouponUpdate', [
            'coupon' => CouponService::mapCouponModel($coupon),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param Coupon $coupon
     * @return JsonResponse
     */
    public function activate(Request $request, Coupon $coupon): JsonResponse
    {
        try {
            $data = $request->all();
            return response()->json(CouponService::activateCoupon($data, $coupon));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating coupon!',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function update(Request $request, Coupon $coupon)
    {
        try {
            $data = $request->all();
            return response()->json(CouponService::updateCoupon($data, $coupon));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating coupon!',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(Request $request, Coupon $coupon)
    {
        try {
            return response()->json(CouponService::deleteCoupon($coupon));
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating offer!',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
