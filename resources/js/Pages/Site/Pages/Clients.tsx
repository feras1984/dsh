import React from 'react';
import ClientProps from "@/Interfaces/Site/ClientProps";
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import BlockCategories from "@/Enums/BlockCategories";
import BlockProps from "@/Interfaces/Site/BlockProps";
import {Award, Building, Star, Users} from "lucide-react";
import IndustryProps from "@/Interfaces/Site/IndustryProps";
import {usePage} from "@inertiajs/react";
import {useTranslation} from "react-i18next";

const Clients: React.FC<{blocks: BlockProps[]}> = ({blocks}) => {
    const commonService = Container.get(CommonService);
    const industries = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.INDUSTRIES)) as IndustryProps [];
    const clients = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.CLIENTS)) as ClientProps [];
    const lang = usePage().props.lang;
    const {t} = useTranslation();

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">{t('valued-clients')}</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        {t('clients-hero')}
                    </p>
                </div>
            </section>

            {/*/!* Client Statistics *!/*/}
            {/*<section className="py-20">*/}
            {/*    <div className="container mx-auto px-4">*/}
            {/*        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">*/}
            {/*            <div className="bg-card border border-border rounded-lg p-6">*/}
            {/*                <div className="text-3xl font-bold text-primary mb-2">100+</div>*/}
            {/*                <div className="text-muted-foreground">Active Clients</div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-card border border-border rounded-lg p-6">*/}
            {/*                <div className="text-3xl font-bold text-primary mb-2">95%</div>*/}
            {/*                <div className="text-muted-foreground">Retention Rate</div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-card border border-border rounded-lg p-6">*/}
            {/*                <div className="text-3xl font-bold text-primary mb-2">15</div>*/}
            {/*                <div className="text-muted-foreground">Industries Served</div>*/}
            {/*            </div>*/}
            {/*            <div className="bg-card border border-border rounded-lg p-6">*/}
            {/*                <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>*/}
            {/*                <div className="text-muted-foreground">Client Satisfaction</div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}

            {/* Industries We Serve */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">{t('industries-we-served')}</h2>
                        <p className="text-xl text-muted-foreground">
                            {t('industries-hero')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group">
                                <div
                                    className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <object data={`/file/blocks/${industry.images[0].url}` || ''} type="image/svg+xml" width="64px"
                                            height="64px">
                                        {/* Fallback if object fails */}
                                        <img src={`/file/blocks/${industry.images[0].url}` || ''} width={'32px'} height={'32px'} alt="svg fallback"/>
                                    </object>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-foreground">{industry.title}</h3>
                                <p className="text-muted-foreground">
                                    {industry.executedProjects} Projects Completed
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Clients */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">{t('featured-clients')}</h2>
                        <p className="text-xl text-muted-foreground">
                            {t('featured-clients-hero')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {clients.map((client, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={`/file/blocks/${client.images[0].url}`}
                                        alt={client.title}
                                        className="w-12 h-12 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-foreground">{client.title}</h3>
                                        <p className="text-sm text-muted-foreground">{client.industry}</p>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="flex items-center mb-2">
                                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                        <Star className="h-4 w-4 text-yellow-500 mr-1" />
                                    </div>
                                    <p
                                        className="text-sm text-muted-foreground italic"
                                        dangerouslySetInnerHTML={{ __html: client.description }}
                                    >
                                        {/*"{client.testimonial}"*/}
                                    </p>
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    {client.executedProjects} Projects Completed
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership Benefits */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">{t('why-clients-choose-us')}</h2>
                        <p className="text-xl text-muted-foreground">
                            {t('our-commitment')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('quality-assurance')}</h3>
                            <p className="text-muted-foreground">
                                {t('quality-assurance-hero')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('expert-team')}</h3>
                            <p className="text-muted-foreground">
                                {t('expert-team-hero')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Building className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('innovative-solutions')}</h3>
                            <p className="text-muted-foreground">
                                {t('innovative-solutions-hero')}
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                <Star className="h-8 w-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2 text-foreground">{t('client-focus')}</h3>
                            <p className="text-muted-foreground">
                                {t('client-focus-hero')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

             Call to Action
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">{t('ready-to-join')}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        {t('ready-to-join-hero')}
                    </p>
                    <a
                        href={`/${lang}/block/contact-us`}
                        className="inline-block bg-primary-foreground text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
                    >
                        {t('start-your-project')}
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Clients;
