import React from 'react';
import ProjectProps from "@/Interfaces/Site/ProjectProps";
import IndustryProps from "@/Interfaces/Site/IndustryProps";
import FilteredProjects from "@/Pages/Site/Pages/Projects/FilteredProjects";
import {Calendar, DollarSign, MapPin} from "lucide-react";
import {useTranslation} from "react-i18next";

const ProjectsUnderConstruction: React.FC<{
    projects: ProjectProps [],
    industries: IndustryProps [],
}> = ({projects, industries}) => {
    const [filteredProjectsItems, setFilteredProjectsItems] = React.useState<ProjectProps[]>(projects);
    const getIndustry = (title: string) => {
        title === 'All' ?
            setFilteredProjectsItems(projects) :
            setFilteredProjectsItems(projects.filter(project => project.industry === title));
    }

    const {t} = useTranslation();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">{t('projects-under-construction')}</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        {t('project-under-construction-hero')}
                    </p>
                </div>
            </section>

            {/* Active Projects Overview */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="bg-card border border-border rounded-lg p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">15</div>
                            <div className="text-muted-foreground">Active Projects</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">$450M</div>
                            <div className="text-muted-foreground">Total Value</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6 text-center">
                            <div className="text-3xl font-bold text-primary mb-2">2,500</div>
                            <div className="text-muted-foreground">Jobs Created</div>
                        </div>
                    </div>

                    {/*<FilteredProjects industries={industries} getIndustry={getIndustry} />*/}

                    {/* Featured Projects */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredProjectsItems.map((project, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                <div className="relative">
                                    <img
                                        src={`/file/blocks/${project.images[0].url}`}
                                        alt={project.title}
                                        className="w-full h-64 object-cover"
                                    />
                                    <div className="absolute top-4 left-4">
                    {/*<span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">*/}
                    {/*  {project.industry}*/}
                    {/*</span>*/}
                                    </div>
                                    <div className="absolute top-4 right-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.progression}% Complete
                    </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
                                    <p
                                        className="text-muted-foreground mb-4"
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                    ></p>

                                    {/* Progress Bar */}
                                    <div className="mb-4">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-sm font-medium text-foreground">Construction Progress</span>
                                            <span className="text-sm text-muted-foreground">{project.progression}%</span>
                                        </div>
                                        <div className="w-full bg-secondary rounded-full h-2">
                                            <div
                                                className="bg-primary h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${project.progression}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                                            Expected Completion: {project.completionDate}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <DollarSign className="h-4 w-4 mr-2 text-primary" />
                                            Project Value: {project.value / 1000000} M
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ProjectsUnderConstruction;
