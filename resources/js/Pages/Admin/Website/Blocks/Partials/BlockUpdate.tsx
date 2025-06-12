import React from 'react';
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import {PageProps} from "@/types";
import {Head, Link} from "@inertiajs/react";
import {Box} from "@mui/material";
import CustomButton from "@/Components/Button/CustomButton";
import AdminLayout from "@/Layouts/Admin/AdminLayout";
import {Block} from "@/models/block/Block";
import BlockCategories from "@/Enums/BlockCategories";
import MainSectionUpdate from "@/Pages/Admin/Website/Blocks/MainSection/MainSectionUpdate";
import AboutUpdate from "@/Pages/Admin/Website/Blocks/About/AboutUpdate";
import ClientsUpdate from "@/Pages/Admin/Website/Blocks/Clients/ClientsUpdate";
import GalleryUpdate from "@/Pages/Admin/Website/Blocks/Gallery/GalleryUpdate";
import MissionUpdate from "@/Pages/Admin/Website/Blocks/Mission/MissionUpdate";
import ServicesUpdate from "@/Pages/Admin/Website/Blocks/Services/ServicesUpdate";
import StoreSectionUpdate from "@/Pages/Admin/Website/Blocks/StoreSection/StoreSectionUpdate";
import NewsUpdate from "@/Pages/Admin/Website/Blocks/News/NewsUpdate";
import ArticlesUpdate from "@/Pages/Admin/Website/Blocks/Articles/ArticlesUpdate";
import IndustriesUpdate from "@/Pages/Admin/Website/Blocks/Industries/IndustriesUpdate";

const BlockUpdate = ({category, block}: PageProps<{category: string, block: Block}>) => {
    const commonService = Container.get(CommonService);
    const categories = Object.values(BlockCategories);
    let UpdateComponent;

    switch (commonService.toTitleCase(category)) {
        case BlockCategories.MAIN_SECTION: {
            UpdateComponent = () => <MainSectionUpdate block={block} category={category}></MainSectionUpdate>;
            break;
        }

        case BlockCategories.STORE_SECTION: {
            UpdateComponent = () => <StoreSectionUpdate block={block} category={category}></StoreSectionUpdate>;
            break;
        }

        case BlockCategories.ABOUT: {
            UpdateComponent = () => <AboutUpdate block={block} category={category}></AboutUpdate>;
            break;
        }

        case BlockCategories.CLIENTS: {
            UpdateComponent = () => <ClientsUpdate block={block} category={category}></ClientsUpdate>;
            break;
        }

        case BlockCategories.GALLERY: {
            UpdateComponent = () => <GalleryUpdate block={block} category={category}></GalleryUpdate>
            break;
        }

        case BlockCategories.MISSION: {
            UpdateComponent = () => <MissionUpdate block={block} category={category}></MissionUpdate>
            break;
        }

        case BlockCategories.SERVICES: {
            UpdateComponent = () => <ServicesUpdate block={block} category={category}></ServicesUpdate>
            break;
        }

        case BlockCategories.NEWS: {
            UpdateComponent = () => <NewsUpdate block={block} category={category}></NewsUpdate>
            break;
        }

        case BlockCategories.ARTICLES: {
            UpdateComponent = () => <ArticlesUpdate block={block} category={category}></ArticlesUpdate>
            break;
        }

        case BlockCategories.INDUSTRIES: {
            UpdateComponent = () => <IndustriesUpdate block={block} category={category}></IndustriesUpdate>
            break;
        }

        default: {
            UpdateComponent = () => <MainSectionUpdate block={block} category={category}></MainSectionUpdate>
        }
    }

    const getTitle = () => {
        return commonService.toTitleCase(category);
    }
    return (
        <AdminLayout>
            <Head title={'Update ' + getTitle()}></Head>
            <UpdateComponent></UpdateComponent>
        </AdminLayout>
    );
}

export default BlockUpdate;
