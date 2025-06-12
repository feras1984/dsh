<?php

namespace Modules\Website\Http\Controllers\Admin;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Modules\Website\Facades\Menus\MenuCategoryService;
use Symfony\Component\HttpFoundation\Response;

class MenuCategoryController extends Controller
{
    public function index() {
        return response()->json(MenuCategoryService::getMenuCategories());
    }

    public function create() {}

    public function store() {
        try {
            $menuCategoryModel = MenuCategoryService::storeMenuCategory();
            return response()->json([
                'status' => 'success',
                'message' => 'A new Menu category has been Added Successfully',
                'category' => $menuCategoryModel,
            ]);

        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function show() {}

    public function edit() {}

    public function update($id) {
        try {
            $menuCategoryModel = MenuCategoryService::updateMenuCategory($id);
            return response()->json([
                'status' => 'success',
                'message' => 'Menu category has been updated Successfully',
                'category' => $menuCategoryModel,
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

    public function destroy($id) {
        try {
            MenuCategoryService::deleteMenuCategory($id);
            return response()->json([
                'status' => 'success',
                'message' => 'Menu category has been deleted Successfully',
            ]);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 'error',
                'message' => $exception->getMessage(),
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
