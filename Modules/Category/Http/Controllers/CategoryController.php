<?php

namespace Modules\Category\Http\Controllers;

use Exception;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Inertia\Inertia;
use Modules\Category\Entities\Category;
use Modules\Category\Facades\CategoryService;
use Modules\Product\Facades\ProductService;
use Modules\Setting\Facades\LanguageService;
use Symfony\Component\HttpFoundation\Response;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Inertia\Response
     */
    public function index()
    {

    }

    /**
     * Show the form for creating a new resource.
//     * @return Renderable
     */
    public function create()
    {
//        return view('category::create');
        return Inertia::render('Admin/CategoryContainer/Partials/CategoryAdd/CategoryAdd');
    }

    /**
     * Store a newly created resource in storage.
     * @param Request $request
//     * @return Renderable
     */
    public function store(Request $request)
    {
//        dd($request->all());
//
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
//     * @return Renderable
     */
    public function show(Category $category)
    {
        $categories = CategoryService::getActiveCategories();
        $extendedCats = CategoryService::getActiveExtendedCategories();
//        $products = ProductService::getActiveProducts();
//        $mainLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::MAIN_MENU->value, '-'));
//        $socialLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::SOCIAL_MENU->value, '-'));
//        $contactLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::CONTACT_MENU->value, '-'));
//        $footerLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::FOOTER_MENU->value, '-'));
//
        $logo = 'logo.png';
        $languages = LanguageService::getActiveLanguages();
        $count = ProductService::getCountOfActiveCategoryProducts($category->id);
        $categoryModel = CategoryService::mapLocaleCategory($category);
//        $homeSlider = BlockService::getActiveBlocks(Str::slug(BlockCategoryEnum::MAIN_SECTION->value, '-'));
//        $services = BlockService::getActiveBlocks(BlockCategoryEnum::SERVICES);
//        $clients = BlockService::getActiveBlocks(BlockCategoryEnum::CLIENTS);
//        $galleries = BlockService::getActiveBlocks(BlockCategoryEnum::GALLERY);
//        $missions = BlockService::getActiveBlocks(Str::slug(BlockCategoryEnum::MISSION->value));
//        $about = BlockService::getActiveBlocks(Str::slug(BlockCategoryEnum::ABOUT->value));
        return Inertia::render('Site/Categories/CategoryPage', [
//            'mainLinks' => $mainLinks,
//            'socialLinks' => $socialLinks,
//            'footerLinks' => $footerLinks,
//            'contactLinks' => $contactLinks,
//            'logo' => $logo,
//            'languages' => $languages,
//            'mainSliders' => $homeSlider,
//            'services' => $services,
//            'clients' => $clients,
//            'galleries' => $galleries,
//            'missions' => $missions,
//            'about' => $about,
            'categories' => $categories,
//            'products' => $products,
            'logo' => $logo,
            'languages' => $languages,
            'count' => $count,
            'extended' => $extendedCats,
            'category' => $categoryModel,
        ]);

    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('category::edit');
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

    public function upload(Request $request, $id) {

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
}
