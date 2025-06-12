import React from 'react';
import {PageProps} from "@/types";
import {Head, Link} from "@inertiajs/react";
import {Box} from "@mui/material";
import CustomButton from "@/Components/Button/CustomButton";
import BlockList from "@/Pages/Admin/Website/Blocks/Partials/BlockList";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import BlockCategories from "@/Enums/BlockCategories";
import MainSectionAdd from "@/Pages/Admin/Website/Blocks/MainSection/MainSectionAdd";
import AboutAdd from "@/Pages/Admin/Website/Blocks/About/AboutAdd";
import ClientsAdd from "@/Pages/Admin/Website/Blocks/Clients/ClientsAdd";
import GalleryAdd from "@/Pages/Admin/Website/Blocks/Gallery/GalleryAdd";
import MissionAdd from "@/Pages/Admin/Website/Blocks/Mission/MissionAdd";
import ServicesAdd from "@/Pages/Admin/Website/Blocks/Services/ServicesAdd";
import StoreSectionAdd from "@/Pages/Admin/Website/Blocks/StoreSection/StoreSectionAdd";
import NewsAdd from "@/Pages/Admin/Website/Blocks/News/NewsAdd";
import IndustriesAdd from "@/Pages/Admin/Website/Blocks/Industries/IndustriesAdd";
import ArticlesAdd from "@/Pages/Admin/Website/Blocks/Articles/ArticlesAdd";

const BlockAdd = ({category}: PageProps<{category: string}>) => {
    const commonService = Container.get(CommonService);
    const categories = Object.values(BlockCategories);
    let AddComponent;

    switch (commonService.toTitleCase(category)) {
        case BlockCategories.MAIN_SECTION: {
            AddComponent = () => <MainSectionAdd category={category}></MainSectionAdd>;
            break;
        }

        case BlockCategories.STORE_SECTION: {
            AddComponent = () => <StoreSectionAdd category={category}></StoreSectionAdd>;
            break;
        }

        case BlockCategories.ABOUT: {
            AddComponent = () => <AboutAdd category={category}></AboutAdd>;
            break;
        }

        case BlockCategories.CLIENTS: {
            AddComponent = () => <ClientsAdd category={category}></ClientsAdd>;
            break;
        }

        case BlockCategories.GALLERY: {
            AddComponent = () => <GalleryAdd category={category}></GalleryAdd>
            break;
        }

        case BlockCategories.MISSION: {
            AddComponent = () => <MissionAdd category={category}></MissionAdd>
            break;
        }

        case BlockCategories.SERVICES: {
            AddComponent = () => <ServicesAdd category={category}></ServicesAdd>
            break;
        }

        case BlockCategories.NEWS: {
            AddComponent = () => <NewsAdd category={category}></NewsAdd>
            break;
        }

        case BlockCategories.ARTICLES: {
            // @ts-ignore
            AddComponent = () => <ArticlesAdd category={category}></ArticlesAdd>
            break;
        }

        case BlockCategories.INDUSTRIES: {
            AddComponent = () => <IndustriesAdd category={category}></IndustriesAdd>
            break;
        }

        default: {
            AddComponent = () => <MainSectionAdd category={category}></MainSectionAdd>
        }
    }

    const getTitle = () => {
        return commonService.toTitleCase(category);
    }
    return (
        <AdminLayout>
            <Head title={'Add ' + getTitle()}></Head>
            <AddComponent></AddComponent>
        </AdminLayout>
    );
}

export default BlockAdd;
