<?php

namespace Modules\Category\Http\Controllers;

use Exception;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Category\Entities\Category;
use Modules\Category\Facades\CategoryService;
use Symfony\Component\HttpFoundation\Response;

class AdminCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
//     * @return Renderable
     */
    public function index(): \Inertia\Response
    {
//        return view('category::index');
        $count = CategoryService::getCategoriesCount();
        $categories = CategoryService::getCategories();
        return Inertia::render('Admin/Category/CategoryContainer', [
            'categories' => $categories,
            'count' => $count,
        ]);
    }

    /**
     * Show the form for creating a new resource.
//     * @return Renderable
     */
    public function create(): \Inertia\Response
    {
        $categories = CategoryService::getCategories();
        return Inertia::render('Admin/Category/Partials/CategoryAdd/CategoryAdd', [
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
            $category = CategoryService::storeCategory($data);
            return \response()->json($category);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while storing CategoryContainer',
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
        return view('category::show');
    }

    /**
     * Show the form for editing the specified resource.
     * @param Category $category
//     * @return Renderable
     */
    public function edit(Category $category): \Inertia\Response
    {
        return Inertia::render('Admin/Category/Partials/CategoryUpdate/CategoryUpdate', [
            'category' => CategoryService::mapCategoryModel($category),
            'categories' => CategoryService::getMainCategories(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     * @param Request $request
     * @param Category $category
     * @return JsonResponse
     */
    public function update(Request $request, Category $category): JsonResponse
    {
        try {
            $data = $request->all();
            $category = CategoryService::updateCategory($data, $category);
            return \response()->json($category);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while storing category',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function upload(Request $request, Category $category): JsonResponse
    {
        try {
            $data = $request->all();
            $category = CategoryService::updateImage($data, $category);
            return \response()->json($category);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while uploading category image',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function activate(Request $request, Category $category): JsonResponse
    {
        try {
            $data = $request->all();
            $category = CategoryService::changeStatus($data, $category);
//            return \response()->json([
//                'status' => 'success',
//                'message' => 'Category status has been updated!'
//            ]);
            return \response()->json($category);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while changing category status',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function extend(Request $request, Category $category): JsonResponse
    {
        try {
            $data = $request->all();
            $category = CategoryService::changeExtendedStatus($data, $category);
//            return \response()->json([
//                'status' => 'success',
//                'message' => 'Category status has been updated!'
//            ]);
            return \response()->json($category);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while changing category extension',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * Remove the specified resource from storage.
     * @param int $id
//     * @return Renderable
     */
    public function destroy(Category $category): JsonResponse
    {
        try {
            CategoryService::deleteCategory($category);
            return response()->json([
                'status' => 'success',
                'message' => 'Category Deleted Successfully',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while deleting category',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function reorder() {
        $categories = CategoryService::getCategories();
        return Inertia::render('Admin/Category/Partials/CategoryReorder/CategoryReorder', [
            'categories' => $categories,
        ]);
    }

    public function storeReorder(Request $request): JsonResponse
    {
        $data = $request->all();
        try {
            CategoryService::reorderList($data);
            return \response()->json([
                'status' => 'success',
                'message' => 'List has been ordered!',
            ]);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => 'Error while reordering list',
                'details' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
