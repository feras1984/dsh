import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import CommonService from "@/Services/CommonService/CommonService";
import {Container} from "typedi";
import "reflect-metadata";
import BlockCategories from "@/Enums/BlockCategories";
import {Quote} from "lucide-react";
import {useTranslation} from "react-i18next";

const GeneralDirectorSpeech: React.FC<{blocks: BlockProps []}> = ({blocks}) => {
    const commonService = Container.get(CommonService);
    const speech = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.GENERAL_DIRECTOR_SPEECH))[0];
    const profile = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.MANAGER_PROFILE))[0];

    const leadership = blocks.filter(block =>
        block.category === commonService.toSnakeCase(BlockCategories.LEADERSHIP_PHILOSOPHY));
    const {t} = useTranslation();
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6 text-foreground">Managing Director's Speech</h1>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        A message from our leadership on vision, values, and the future of SDH
                    </p>
                </div>
            </section>

            {/* Managing Director Profile */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                        <div className="lg:col-span-1">
                            <div className="bg-card border border-border rounded-lg p-6 text-center">
                                <img
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                                    alt="Managing Director"
                                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                                />
                                <h3 className="text-2xl font-bold mb-2 text-foreground">{profile.title}</h3>
                                <p
                                    className="text-primary font-medium mb-4"
                                    dangerouslySetInnerHTML={{__html: profile.brief}}
                                ></p>
                                <p
                                    className="text-muted-foreground"
                                    dangerouslySetInnerHTML={{__html: profile.description}}
                                >
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="bg-card border border-border rounded-lg p-8">
                                <Quote className="h-12 w-12 text-primary mb-6" />
                                <blockquote className="text-lg text-foreground leading-relaxed space-y-4">
                                    <p dangerouslySetInnerHTML={{__html: speech.description}}></p>
                                </blockquote>

                                <div className="mt-8 pt-6 border-t border-border">
                                    <p className="text-foreground font-semibold">{profile.title}</p>
                                    <p className="text-muted-foreground"
                                       dangerouslySetInnerHTML={{__html: profile.brief}}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Philosophy */}
            <section className="py-20 bg-secondary/50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold mb-12 text-center text-foreground">{t('leadership-philosophy')}</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {leadership.map((item, i) => (
                                <div className="bg-card border border-border rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-semibold mb-4 text-foreground">{item.title}</h3>
                                    <p
                                        className="text-muted-foreground"
                                        dangerouslySetInnerHTML={{__html: item.description}}
                                    >
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GeneralDirectorSpeech;
