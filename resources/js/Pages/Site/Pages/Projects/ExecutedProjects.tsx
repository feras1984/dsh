import React from 'react';
import ProjectProps from "@/Interfaces/Site/ProjectProps";
import IndustryProps from "@/Interfaces/Site/IndustryProps";
import FilteredProjects from "@/Pages/Site/Pages/Projects/FilteredProjects";
import {Calendar, DollarSign, MapPin} from "lucide-react";
import {useTranslation} from "react-i18next";

const ExecutedProjects: React.FC<{
    projects: ProjectProps [],
    industries: IndustryProps [],
}> = ({projects, industries}) => {

    const [filteredProjectsItems, setFilteredProjectsItems] = React.useState<ProjectProps[]>(projects);
    const {t} = useTranslation();

    const getIndustry = (title: string) => {
        title === 'All' ?
            setFilteredProjectsItems(projects) :
            setFilteredProjectsItems(projects.filter(project => project.industry === title));
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">{t('executed-projects')}</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        {t('executed-projects-hero')}
                    </p>
                </div>
            </section>

            {/*<FilteredProjects industries={industries} getIndustry={getIndustry} />*/}

            {/* Projects Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjectsItems.map((project, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <div className="relative overflow-hidden">
                                    <img
                                        src={`/file/blocks/${project.images[0].url}`}
                                        alt={project.title}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                    {/*<span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">*/}
                    {/*  {project.industry}*/}
                    {/*</span>*/}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-foreground">{project.title}</h3>
                                    <p
                                        className="text-muted-foreground mb-4 line-clamp-3"
                                        dangerouslySetInnerHTML={{ __html: project.description }}
                                    ></p>

                                    <div className="space-y-2">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4 mr-2 text-primary" />
                                            {project.location}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4 mr-2 text-primary" />
                                            Completed: {project.completionDate}
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

            {/* Statistics */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">{t('projects-statistics')}</h2>
                        <p className="text-xl text-muted-foreground">{t('projects-track-record')}</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="text-3xl font-bold text-primary mb-2">50+</div>
                            <div className="text-muted-foreground">{t('total-projects')}</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="text-3xl font-bold text-primary mb-2">$2.5B</div>
                            <div className="text-muted-foreground">{t('total-value')}</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="text-3xl font-bold text-primary mb-2">98%</div>
                            <div className="text-muted-foreground">{t('on-time-delivery')}</div>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-6">
                            <div className="text-3xl font-bold text-primary mb-2">100%</div>
                            <div className="text-muted-foreground">{t('client-satisfaction')}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ExecutedProjects;
