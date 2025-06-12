<?php

namespace Modules\Product\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Modules\Category\Facades\CategoryService;
use Modules\Product\Entities\Product;
use Modules\Product\Facades\ProductService;
use Modules\Setting\Facades\LanguageService;
use Exception;
use Symfony\Component\HttpFoundation\Response as StaticResponse;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {

        $products = ProductService::getActiveProducts();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('product::create');
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
     * @return \Inertia\Response
     */
    public function show(Product $product)
    {
        $languages = LanguageService::getActiveLanguages();
        $categories = CategoryService::getActiveCategories();
        $extendedCats = CategoryService::getActiveExtendedCategories();
        $logo = 'logo.png';
        return Inertia::render('Site/Products/ProductPage', [
            'product' => ProductService::mapLocaleProduct($product),
            'languages' => $languages,
            'categories' => $categories,
            'extended' => $extendedCats,
            'logo' => $logo,
        ]);
    }

    /**
     * Return a specified product for JSON!
     * @param Product $product
     * @return JsonResponse
     */

    public function get(Product $product)
    {
        return response()->json(ProductService::mapLocaleProduct($product));
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('product::edit');
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

    public function getAsyncProducts($name) {
        return response()->json(ProductService::getProductByName($name));
    }

    public function like(Request $request) {
        try {
            $data = $request->all();
            ProductService::changeProductLikeStatus($data);
            return response()->json([
                'status' => 'success',
                'message' => 'Like has been added',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error Happened While Adding Like',
                'details' => $exception->getMessage(),
            ], StaticResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function favorite(Request $request) {
        try {
            $data = $request->all();
            ProductService::changeProductFavoriteStatus($data);
            return response()->json([
                'status' => 'success',
                'message' => 'Favorite has been added',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error Happened While Adding favorite',
                'details' => $exception->getMessage(),
            ], StaticResponse::HTTP_INTERNAL_SERVER_ERROR::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function review(Request $request) {
        try {
            $data = $request->all();
            $review = ProductService::changeProductReviewStatus($data);
            return response()->json($review);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error Happened While Adding Review',
                'details' => $exception->getMessage(),
            ], StaticResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function rate(Request $request) {
        try {
            $data = $request->all();
            ProductService::changeProductRating($data);
            return response()->json([
                'status' => 'success',
                'message' => 'Your rate has been added',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error Happened While Adding Rate',
                'details' => $exception->getMessage(),
            ], StaticResponse::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function activities() {
        return response()->json(ProductService::getUserProductsActivities(Auth::user()));

    }

    public function topSales(): JsonResponse
    {
        return \response()->json(ProductService::localeTopProducts());
    }

    public function offers() {
        return \response()->json(ProductService::localeOffers());
    }

}
