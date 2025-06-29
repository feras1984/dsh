import BlockCategories from "@/Enums/BlockCategories";
import {Container} from "typedi";
import CommonService from "@/Services/CommonService/CommonService";
import "reflect-metadata";
import MenuCategories from "@/Enums/MenuCategories";

const commonService = Container.get(CommonService);

export type CustomTab = {
    name: string,
    icon: string,
    link: string,
    children: CustomTab [],
};

const SidebarList: CustomTab [] = [
    {
        name: 'Home',
        icon: 'home',
        link: '/admin',
        children: [],
    },

    // {
    //     name: 'Customers',
    //     icon: 'customer',
    //     link: '/admin/user',
    //     children: [],
    // },
    //
    // {
    //     name: 'Categories',
    //     icon: 'category',
    //     link: '/admin/category',
    //     children: [],
    // },
    //
    // {
    //     name: 'Products',
    //     icon: 'product',
    //     link: '/admin/product',
    //     children: [],
    // },
    //
    // {
    //     name: 'Marketing',
    //     icon: 'marketing',
    //     link: '',
    //     children: [
    //         {
    //             name: 'Offers',
    //             icon: 'offer',
    //             link: '/admin/marketing/offer',
    //             children: [],
    //         },
    //         {
    //             name: 'Coupons',
    //             icon: 'coupon',
    //             link: '/admin/marketing/coupon',
    //             children: [],
    //         },
    //         {
    //             name: 'Loyalty Points',
    //             icon: 'loyalty',
    //             link: '/admin/marketing/loyalty',
    //             children: [],
    //         },
    //     ],
    // },
    //
    // {
    //     name: 'Orders',
    //     icon: 'order',
    //     link: '/admin/order',
    //     children: [],
    // },

    {
        name: 'Website',
        icon: 'website',
        link: '/admin/website',
        children: [
            {
                name: BlockCategories.MAIN_SECTION,
                icon: 'main-section',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.MAIN_SECTION),
                children: [],
            },
            // {
            //     name: BlockCategories.STORE_SECTION,
            //     icon: 'main-section',
            //     link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.STORE_SECTION),
            //     children: [],
            // },
            {
                name: BlockCategories.SERVICES,
                icon: 'services',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.SERVICES),
                children: [],
            },
            {
                name: BlockCategories.CLIENTS,
                icon: 'clients',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.CLIENTS),
                children: [],
            },
            // {
            //     name: BlockCategories.GALLERY,
            //     icon: 'gallery',
            //     link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.GALLERY),
            //     children: [],
            // },
            {
                name: BlockCategories.ABOUT,
                icon: 'about-us',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.ABOUT),
                children: [
                    {
                        name: BlockCategories.ABOUT_SDH,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.ABOUT_SDH),
                        children: [],
                    },

                    {
                        name: BlockCategories.MISSION,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.MISSION),
                        children: [],
                    },

                    {
                        name: BlockCategories.VISION,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.VISION),
                        children: [],
                    },

                    {
                        name: BlockCategories.CORE_VALUES,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.CORE_VALUES),
                        children: [],
                    },

                    {
                        name: BlockCategories.GENERAL_DIRECTOR_SPEECH,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.GENERAL_DIRECTOR_SPEECH),
                        children: [],
                    },
                    {
                        name: BlockCategories.MANAGER_PROFILE,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.MANAGER_PROFILE),
                        children: [],
                    },

                    {
                        name: BlockCategories.LEADERSHIP_PHILOSOPHY,
                        icon: 'about-us',
                        link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.LEADERSHIP_PHILOSOPHY),
                        children: [],
                    },
                ],
            },
            // {
            //     name: BlockCategories.MISSION,
            //     icon: 'mission',
            //     link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.MISSION),
            //     children: [],
            // },

            {
                name: BlockCategories.NEWS,
                icon: 'mission',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.NEWS),
                children: [],
            },

            {
                name: BlockCategories.ARTICLES,
                icon: 'mission',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.ARTICLES),
                children: [],
            },

            {
                name: BlockCategories.INDUSTRIES,
                icon: 'mission',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.INDUSTRIES),
                children: [],
            },

            {
                name: BlockCategories.PROJECTS,
                icon: 'mission',
                link: '/admin/website/get-block/' + commonService.toSnakeCase(BlockCategories.PROJECTS),
                children: [],
            },



            {
                name: MenuCategories.MAIN_MENU,
                icon: 'main-menu',
                link: '/admin/website/get-menu/' + commonService.toSnakeCase(MenuCategories.MAIN_MENU),
                children: [],
            },

            {
                name: MenuCategories.SOCIAL_MENU,
                icon: 'social-menu',
                link: '/admin/website/get-menu/' + commonService.toSnakeCase(MenuCategories.SOCIAL_MENU),
                children: [],
            },

            {
                name: MenuCategories.CONTACT_MENU,
                icon: 'contact-menu',
                link: '/admin/website/get-menu/' + commonService.toSnakeCase(MenuCategories.CONTACT_MENU),
                children: [],
            },

            {
                name: MenuCategories.FOOTER_MENU,
                icon: 'footer-menu',
                link: '/admin/website/get-menu/' + commonService.toSnakeCase(MenuCategories.FOOTER_MENU),
                children: [],
            },

        ],
    },

    // {
    //     name: 'Settings',
    //     icon: 'settings',
    //     link: '/admin/setting',
    //     children: [
    //         {
    //             name: 'Languages',
    //             icon: 'language',
    //             link: '/admin/setting/language',
    //             children: [],
    //         },
    //     ],
    // },
];

export default SidebarList;
