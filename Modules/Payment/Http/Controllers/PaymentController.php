<?php

namespace Modules\Payment\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\Payment\Services\PaymentService;
use Symfony\Component\HttpFoundation\Response;

class PaymentController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('payment::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('payment::create');
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
        return view('payment::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('payment::edit');
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

    // This method is used for StripePayment Class
    public function intent(Request $request, PaymentService $service): JsonResponse
    {
        try {
            if(!method_exists($service, 'getIntent')) {
                return response()->json([
                    'status' => 'error',
                    'message' => 'Error in your request!',
                ], Response::HTTP_BAD_REQUEST);
            }
            $data = $request->all();
            $clientSecret = $service->getIntent($data);
            return response()->json([
                'clientSecret' => $clientSecret,
            ], Response::HTTP_OK);

        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error happened while processing payment!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
