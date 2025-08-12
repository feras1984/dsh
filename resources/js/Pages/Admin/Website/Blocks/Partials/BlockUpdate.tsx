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
import GeneralDirectorUpdate from "@/Pages/Admin/Website/Blocks/GeneralDirectorSpeech/GeneralDirectorUpdate";
import ProjectsUpdate from "@/Pages/Admin/Website/Blocks/Projects/ProjectsUpdate";
import ManagerProfileUpdate from "@/Pages/Admin/Website/Blocks/ManagerProfile/ManagerProfileUpdate";
import LeadershipPhilosophyUpdate from "@/Pages/Admin/Website/Blocks/LeadershipPhilosophy/LeadershipPhilosophyUpdate";
import VisionUpdate from "@/Pages/Admin/Website/Blocks/Vision/VisionUpdate";
import CoreValuesUpdate from "@/Pages/Admin/Website/Blocks/CoreValues/CoreValuesUpdate";
import Project from "@/models/block/Project";
import PrincipalActivitiesUpdate from "@/Pages/Admin/Website/Blocks/PrincipalActivities/PrincipalActivitiesUpdate";
import QualityAssuranceUpdate from "@/Pages/Admin/Website/Blocks/QualityAssurance/QualityAssuranceUpdate";
import SafetyPlanningUpdate from "@/Pages/Admin/Website/Blocks/SafetyPlanning/SafetyPlanningUpdate";
import CompanyThoughtsUpdate from "@/Pages/Admin/Website/Blocks/CompanyThoughts/CompanyThoughtsUpdate";
import OrganizationalSectionUpdate
    from "@/Pages/Admin/Website/Blocks/OrgainizationalSection/OrganizationalSectionUpdate";

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

        case BlockCategories.ABOUT_DSH: {
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

        case BlockCategories.VISION: {
            UpdateComponent = () => <VisionUpdate block={block} category={category}></VisionUpdate>
            break;
        }

        case BlockCategories.CORE_VALUES: {
            UpdateComponent = () => <CoreValuesUpdate block={block} category={category}></CoreValuesUpdate>
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

        case BlockCategories.GENERAL_DIRECTOR_SPEECH: {
            UpdateComponent = () => <GeneralDirectorUpdate block={block} category={category}></GeneralDirectorUpdate>
            break;
        }

        case BlockCategories.MANAGER_PROFILE: {
            UpdateComponent = () => <ManagerProfileUpdate block={block} category={category}></ManagerProfileUpdate>
            break;
        }

        case BlockCategories.LEADERSHIP_PHILOSOPHY: {
            UpdateComponent = () => <LeadershipPhilosophyUpdate block={block} category={category}></LeadershipPhilosophyUpdate>
            break;
        }

        case BlockCategories.PROJECTS: {
            UpdateComponent = () => <ProjectsUpdate block={block as Project} category={category}></ProjectsUpdate>
            break;
        }

        case BlockCategories.PRINCIPAL_ACTIVITIES: {
            UpdateComponent = () => <PrincipalActivitiesUpdate block={block as Project} category={category}></PrincipalActivitiesUpdate>
            break;
        }

        case BlockCategories.QUALITY_ASSURANCE: {
            UpdateComponent = () => <QualityAssuranceUpdate block={block as Project} category={category}></QualityAssuranceUpdate>
            break;
        }

        case BlockCategories.SAFETY_PLANNING: {
            UpdateComponent = () => <SafetyPlanningUpdate block={block as Project} category={category}></SafetyPlanningUpdate>
            break;
        }

        case BlockCategories.COMPANY_THOUGHTS: {
            UpdateComponent = () => <CompanyThoughtsUpdate block={block as Project} category={category}></CompanyThoughtsUpdate>
            break;
        }

        case BlockCategories.ORGANIZATIONAL_SECTION: {
            UpdateComponent = () => <OrganizationalSectionUpdate block={block as Project} category={category}></OrganizationalSectionUpdate>
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
