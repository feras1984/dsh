<?php

namespace Modules\Marketing\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Marketing\Facades\Coupon\CouponService;
use Symfony\Component\HttpFoundation\Response;

class MarketingController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('marketing::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('marketing::create');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return Renderable
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('marketing::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('marketing::edit');
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param int $id
     * @return Renderable
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
     * @return Renderable
     */
    public function destroy($id)
    {
        //
    }

    public function check(Request $request) {
        try {
            $data = $request->all();
            $coupon = CouponService::checkCoupon($data);
            if (is_null($coupon)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Coupon is not exist!',
                ], Response::HTTP_NOT_FOUND);
            } elseif (!CouponService::isValidCoupon($coupon)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Coupon is expired!',
                ], Response::HTTP_BAD_REQUEST);
            } elseif (!CouponService::isActiveCoupon($coupon)) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Coupon is disabled!',
                ], Response::HTTP_BAD_REQUEST);
            } else {
                return \response()->json(CouponService::mapCouponModel($coupon));
            }
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while checking coupon!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
