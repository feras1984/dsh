<?php

namespace Modules\Website\Http\Controllers\Site;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Modules\Setting\Facades\LanguageService;
use Modules\Website\Entities\Block;
use Modules\Website\Enums\MenuCategoryEnum;
use Modules\Website\Facades\Blocks\BlockService;
use Modules\Website\Facades\Menus\MenuService;

class BlockController extends Controller
{
    /**
     * Display a listing of the resource.
     * @return \Inertia\Response
     */
    public function index($category)
    {
        $mainLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::MAIN_MENU->value, '-'));
        $socialLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::SOCIAL_MENU->value, '-'));
        $contactLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::CONTACT_MENU->value, '-'));
        $footerLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::FOOTER_MENU->value, '-'));

        $logo = 'logo.png';
        $languages = LanguageService::getActiveLanguages();

        $blocks = BlockService::getActiveBlocks($category);
        return Inertia::render('Site/HubList', [
            'mainLinks' => $mainLinks,
            'socialLinks' => $socialLinks,
            'footerLinks' => $footerLinks,
            'contactLinks' => $contactLinks,
            'logo' => $logo,
            'languages' => $languages,
            'blocks' => $blocks,
            'category' => $category,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     * @return Renderable
     */
    public function create()
    {
        return view('website::create');
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
    public function show($category, Block $block)
    {
        $mainLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::MAIN_MENU->value, '-'));
        $socialLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::SOCIAL_MENU->value, '-'));
        $contactLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::CONTACT_MENU->value, '-'));
        $footerLinks = MenuService::getActiveLinks(Str::slug(MenuCategoryEnum::FOOTER_MENU->value, '-'));

        $logo = 'logo.png';
        $languages = LanguageService::getActiveLanguages();

        $block = BlockService::mapLocaleBlock($block);
        return Inertia::render('Site/HubDetails', [
            'mainLinks' => $mainLinks,
            'socialLinks' => $socialLinks,
            'footerLinks' => $footerLinks,
            'contactLinks' => $contactLinks,
            'logo' => $logo,
            'languages' => $languages,
            'block' => $block,
            'category' => $category,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     * @param int $id
     * @return Renderable
     */
    public function edit($id)
    {
        return view('website::edit');
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
}
