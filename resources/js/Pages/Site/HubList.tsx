import React from 'react';
import LinkListProps from "@/Interfaces/Site/LinkListProps";
import BlockProps from "@/Interfaces/Site/BlockProps";
import {PageProps} from "@/types";
import {Container} from "typedi";
import "reflect-metadata";
import CommonService from "@/Services/CommonService/CommonService";
import BlockCategories from "@/Enums/BlockCategories";
import AboutUsList from "@/Pages/Site/Blocks/AboutUs/AboutUsList";
import ClientsList from "@/Pages/Site/Blocks/Clients/ClientsList";
import GalleryList from "@/Pages/Site/Blocks/Gallery/GalleryList";
import ServicesList from "@/Pages/Site/Blocks/Services/ServicesList";
import Contact from "@/Pages/Site/Blocks/Contact/Contact";
import {Head} from "@inertiajs/react";
import {Box} from "@mui/material";
import HeaderLayout from "@/Layouts/Site/HeaderLayout";
import {useAppDispatch} from "@/Redux/Store/hook";
import {setSpinner} from "@/Redux/Reducers/SpinnerSlice/SpinnerSlice";
import ArticlesList from "@/Pages/Site/Blocks/Articles/ArticlesList";
import IndustriesList from "@/Pages/Site/Blocks/Industries/IndustriesList";
import NewsList from "@/Pages/Site/Blocks/News/NewsList";
import AboutDSH from "@/Pages/Site/Pages/AboutDSH";
import GeneralDirectorSpeech from "@/Pages/Site/Pages/GeneralDirectorSpeech";
import Clients from "@/Pages/Site/Pages/Clients";
import ExecutedProjects from "@/Pages/Site/Pages/Projects/ExecutedProjects";
import Projects from "@/Pages/Site/Pages/Projects/Projects";
import Project from "@/models/block/Project";
import ProjectProps from "@/Interfaces/Site/ProjectProps";
import ClientProps from "@/Interfaces/Site/ClientProps";
import PrincipalActivities from "@/Pages/Site/Pages/PrincipalActivities";
import QualityAssurance from "@/Pages/Site/Pages/QualityAssurance";
import SafetyPlanning from "@/Pages/Site/Pages/SafetyPlanning";
import CompanyThoughts from "@/Pages/Site/Pages/CompanyThoughts";
import ContactUs from "@/Pages/Site/Pages/ContactUs";

interface HubProps extends LinkListProps {
    blocks: BlockProps [];
    category: string;
}

const HubList: React.FC<HubProps> = ({
                                         mainLinks,
                                         socialLinks,
                                         footerLinks,
                                         contactLinks,
                                         logo,
                                         languages,
                                         blocks,
                                         category}) => {
    const commonService = Container.get(CommonService);
    let AddComponent;

    const dispatch = useAppDispatch();

    // React.useEffect(() => {
    //     // if (mainLinks.length > 0) {
    //     //     dispatch(setSpinner(false));
    //     // }
    //     setTimeout(() => {
    //         dispatch(setSpinner(false));
    //     }, 3000)
    // }, [])

    switch (commonService.toTitleCase(category)) {
        case BlockCategories.ABOUT: {
            AddComponent = () => <AboutUsList about={blocks}></AboutUsList>;
            break;
        }

        case BlockCategories.ABOUT_DSH: {
            AddComponent = () => <AboutDSH blocks={blocks}></AboutDSH>;
            break;
        }

        case BlockCategories.GENERAL_DIRECTOR_SPEECH: {
            AddComponent = () => <GeneralDirectorSpeech blocks={blocks}></GeneralDirectorSpeech>;
            break;
        }

        case BlockCategories.CLIENTS: {
            // AddComponent = () => <ClientsList clients={blocks}></ClientsList>;
            AddComponent = () => <Clients blocks={blocks}></Clients>
            break;
        }

        case BlockCategories.PROJECTS: {
            AddComponent = () => <Projects blocks={blocks as ProjectProps []}></Projects>;
            break;
        }

        case BlockCategories.GALLERY: {
            AddComponent = () => <GalleryList galleries={blocks}></GalleryList>
            break;
        }

        case BlockCategories.SERVICES: {
            AddComponent = () => <ServicesList services={blocks} category={category}></ServicesList>
            break;
        }

        case BlockCategories.CONTACT_US: {
            AddComponent = () => <ContactUs industries={blocks} contactLinks={contactLinks}></ContactUs>
            break;
        }

        case BlockCategories.ARTICLES: {
            AddComponent = () => <ArticlesList services={blocks} category={category}></ArticlesList>
            break;
        }

        case BlockCategories.INDUSTRIES: {
            AddComponent = () => <IndustriesList services={blocks} category={category}></IndustriesList>
            break;
        }

        case BlockCategories.NEWS: {
            AddComponent = () => <NewsList services={blocks} category={category}></NewsList>
            break;
        }

        case BlockCategories.PRINCIPAL_ACTIVITIES: {
            AddComponent = () => <PrincipalActivities blocks={blocks}></PrincipalActivities>
            break;
        }

        case BlockCategories.QUALITY_ASSURANCE: {
            AddComponent = () => <QualityAssurance blocks={blocks}></QualityAssurance>
            break;
        }

        case BlockCategories.SAFETY_PLANNING: {
            AddComponent = () => <SafetyPlanning blocks={blocks}></SafetyPlanning>
            break;
        }

        case BlockCategories.COMPANY_THOUGHTS: {
            AddComponent = () => <CompanyThoughts blocks={blocks}></CompanyThoughts>
            break;
        }
    }


    return (
        <HeaderLayout
            mainLinks={mainLinks}
            socialLinks={socialLinks}
            contactLinks={contactLinks}
            footerLinks={footerLinks}
            logo={logo}
            languages={languages}
        >
            <Head title={commonService.toTitleCase(category)}></Head>
            <Box className="relative mt-[90px]">
                <AddComponent></AddComponent>
            </Box>
        </HeaderLayout>
    );
};

export default HubList;
