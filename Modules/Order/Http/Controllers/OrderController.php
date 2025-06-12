<?php

namespace Modules\Order\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Modules\Category\Facades\CategoryService;
use Modules\Order\Facades\OrderService;
use Modules\Setting\Facades\LanguageService;
use Symfony\Component\HttpFoundation\Response;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        return view('order::index');
    }

    /**
     * Show the form for creating a new resource.
     * @return \Inertia\Response
     */
    public function create()
    {
        $languages = LanguageService::getActiveLanguages();
        $categories = CategoryService::getActiveCategories();
        $extendedCats = CategoryService::getActiveExtendedCategories();
        $logo = 'logo.png';
        return Inertia::render('Site/Order/OrderPage', [
            'languages' => $languages,
            'categories' => $categories,
            'extended' => $extendedCats,
            'logo' => $logo,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            $data = $request->all();
            OrderService::storeOrder($data);
            return response()->json([
                'status' => 'success',
                'message' => 'Your order has been stored!'
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Something happened while storing order!',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }


    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id)
    {
        return view('order::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('order::edit');
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

    public function list() {
        if (Auth::check()) {
            return \response()->json(OrderService::getOrdersByUser(Auth::id()), Response::HTTP_OK);
        }

        else {
            return \response()->json(
                [
                    'status' => 'error',
                    'message' => 'You are not authorized to reach this data!'
                ], Response::HTTP_FORBIDDEN,
            );
        }
    }
}
