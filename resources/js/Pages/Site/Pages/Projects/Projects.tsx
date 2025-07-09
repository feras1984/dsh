import React from 'react';
import ProjectProps from "@/Interfaces/Site/ProjectProps";
import {Box, Paper, Tab, Grid} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import ExecutedProjects from "@/Pages/Site/Pages/Projects/ExecutedProjects";
import ProjectsUnderConstruction from "@/Pages/Site/Pages/Projects/ProjectsUnderConstruction";
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import BlockCategories from "@/Enums/BlockCategories";
import BlockProps from "@/Interfaces/Site/BlockProps";
import IndustryProps from "@/Interfaces/Site/IndustryProps";
import {useTranslation} from "react-i18next";

const Projects: React.FC<{blocks: BlockProps []}> = ({blocks}) => {
    const commonService = Container.get(CommonService);
    const projects = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.PROJECTS)) as ProjectProps [];
    const industries = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.INDUSTRIES)) as IndustryProps [];
    const [value, setValue] = React.useState('1');
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const {t} = useTranslation();
    return (
        <Box sx={{ width: '100%', typography: 'body1', padding: '16px' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList
                        onChange={handleChange}
                        aria-label="project tabs"
                        textColor="secondary"
                        indicatorColor="secondary"
                    >
                        <Tab
                            label={t('executed-projects')}
                            value="1" wrapped={true}
                            className="tab-width"
                            color="secondary"
                        />

                        <Tab
                            label={t('projects-under-construction')}
                            value="2"
                            wrapped={true}
                            className="tab-width"
                            color="secondary"
                        />
                    </TabList>

                    <TabPanel value="1">
                        <ExecutedProjects
                            projects={projects.filter(block => block.isCompleted)}
                            industries={industries}
                        />
                    </TabPanel>
                    <TabPanel value="2">
                        <ProjectsUnderConstruction
                            projects={projects.filter(block => !block.isCompleted)}
                            industries={industries}
                        />
                    </TabPanel>
                </Box>
            </TabContext>
        </Box>
    );
};

export default Projects;
