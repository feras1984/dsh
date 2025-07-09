<?php

namespace Modules\Product\Http\Controllers;

use Exception;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Modules\Category\Facades\CategoryService;
use Modules\Product\Entities\Product;
use Modules\Product\Facades\ProductService;
use Modules\Product\Facades\UserProductService\UserProductService;

class AdminProductController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return Response
     */
    public function index(): Response
    {
//        return view('product::index');
        $products = ProductService::getProducts();
        $count = ProductService::getProductsCount();
        return Inertia::render('Admin/Product/ProductContainer', [
            'products' => $products,
            'count' => $count,
        ]);
    }

    public function count(): JsonResponse
    {
        return \response()->json(ProductService::getProductsCount());
    }

    public function list() {
        return \response()->json(ProductService::getAdminProducts());
    }

    /**
     * Show the form for creating a new resource.
//     * @return Renderable
     */
    public function create(): Response
    {
//        return view('product::create');
        $categories = CategoryService::getLeaveCategories();
        return Inertia::render('Admin/Product/Partials/ProductAdd/ProductAdd', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        try {
            $data = $request->all();
            $product = ProductService::storeProduct($data);
            return \response()->json($product);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while storing Product',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Show the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function show($id): Renderable
    {
        return view('product::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param Product $product
     * @return Response
     */
    public function edit(Product $product): Response
    {
        return Inertia::render('Admin/Product/Partials/ProductUpdate/ProductUpdate', [
            'product' => ProductService::mapProductModel($product),
            'categories' => CategoryService::getLeaveCategories(),
            'extensionList' => CategoryService::extendedCategories(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param Product $product
     * @return JsonResponse
     */
    public function update(Request $request, Product $product): JsonResponse
    {
        try {
            $data = $request->all();
//            $category = CategoryService::updateCategory($data, $category);
            return \response()->json(ProductService::updateProduct($data, $product));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating product',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function extendedCategory(Request $request, Product $product): JsonResponse
    {
        try {
            $data = $request->all();
            return \response()->json(ProductService::extendedCategory($product, $data));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while updating product',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteExtended(Request $request, Product $product) {
        try {
            $data = $request->all();
            return \response()->json(ProductService::deleteExtendedCategory($product, $data));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while deleting extended category',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Check if product SKU is not taken (Unique SKU)!
     * @param Request $request
     * @return JsonResponse
     */

    public function uniqueSKU(Request $request, $id = -1): JsonResponse
    {
        try {
            $data = $request->all();
            $product = ProductService::getProductBySKU($data['sku'], $id);
            return \response()->json(is_null($product));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while obtaining sku',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function addImage(Request $request, Product $product): JsonResponse
    {
        try {
            $data = $request->all();
            return \response()->json(ProductService::saveImage($data, $product));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while adding product image',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function upload(Request $request, Product $product): JsonResponse
    {
        try {
            $data = $request->all();
            return \response()->json(ProductService::updateImage($data, $product));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while uploading product image',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function deleteImage(Request $request, Product $product): JsonResponse
    {
        try {
            $data = $request->all();
            return \response()->json(ProductService::deleteImage($data, $product));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while deleting product image',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function activate(Request $request, Product $product) {
        try {
            $data = $request->all();
//            ProductService::changeStatus($data, $product);
//            return \response()->json([
//                'status' => 'success',
//                'message' => 'Category status has been updated!'
//            ]);
            return \response()->json(ProductService::changeStatus($data, $product));
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while changing product status',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param Product $product
     * @return JsonResponse
     */
    public function destroy(Product $product): JsonResponse
    {
        try {
            ProductService::deleteProduct($product);
            return response()->json([
                'status' => 'success',
                'message' => 'Product Deleted Successfully',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while deleting product',
                'details' => $exception->getMessage(),
            ], \Symfony\Component\HttpFoundation\Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function likes(Product $product): JsonResponse
    {
        return \response()->json(ProductService::getLikes($product));
    }

    public function favorites(Product $product): JsonResponse
    {
        return \response()->json(ProductService::getFavorites($product));
    }

    public function ratings(Product $product): JsonResponse
    {
        return \response()->json(ProductService::getRatings($product));
    }

    public function reviews(Product $product): JsonResponse
    {
        return \response()->json(ProductService::getReviews($product));
    }

    public function allLikes(): JsonResponse
    {
        return \response()->json(UserProductService::getAllLikes());
    }

    public function allFavorites(): JsonResponse
    {
        return \response()->json(UserProductService::getAllFavorites());
    }

    public function allRatings(): JsonResponse
    {
        return \response()->json(UserProductService::getAllRatings());
    }

    public function allReviews(): JsonResponse
    {
        return \response()->json(UserProductService::getAllReviews());
    }

    public function topSales(): JsonResponse
    {
        return \response()->json(ProductService::topProducts());
    }
}
