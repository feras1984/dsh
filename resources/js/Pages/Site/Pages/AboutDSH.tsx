import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import BlockCategories from "@/Enums/BlockCategories";
import {useTranslation} from "react-i18next";

const AboutDsh: React.FC<{blocks: BlockProps []}> = ({blocks}) => {
    const commonService = Container.get(CommonService);
    const ourStory = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.ABOUT_DSH))[0];
    const mission = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.MISSION))[0];
    const vision = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.VISION))[0];
    const coreValues = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.CORE_VALUES));
    const {t} = useTranslation();

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">{t('about-dsh')}</h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed">
                        {t('about-hero')}
                    </p>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-foreground">{ourStory.title}</h2>
                            <p
                                className="text-lg text-muted-foreground mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: ourStory.description }}
                            >

                            </p>
                        </div>
                        <div>
                            <img
                                // src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                src={`/file/blocks/${ourStory.images[0].url}`}
                                alt="SDH Construction Site"
                                className="rounded-lg shadow-2xl w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">{t('core-values')}</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            {t('core-values-hero')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => (
                            <div key={index} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300">
                                <div className="flex justify-center mb-4">
                                    <object  data={`/file/blocks/${value.images[0].url}` || ''} type="image/svg+xml"
                                             width="64px"
                                            height="64px">
                                        {/* Fallback if object fails */}
                                        <img src={`/file/blocks/${value.images[0].url}` || ''} width={'32px'} height={'32px'} alt="svg fallback"/>
                                    </object>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                                <p
                                    className="text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: value.description }}
                                ></p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div className="bg-card border border-border rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">{mission.title}</h2>
                            <p
                                className="text-lg text-muted-foreground leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: mission.description }}
                            >
                            </p>
                        </div>
                        <div className="bg-card border border-border rounded-lg p-8">
                            <h2 className="text-3xl font-bold mb-6 text-foreground">{vision.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed"
                               dangerouslySetInnerHTML={{ __html: vision.description }}
                            >
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-primary-foreground/80">{t('completed-projects')}</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">23+</div>
                            <div className="text-primary-foreground/80">{t('year-of-experience')}</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">150+</div>
                            <div className="text-primary-foreground/80">{t('team-members')}</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">50+</div>
                            <div className="text-primary-foreground/80">{t('happy-clients')}</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutDsh;
