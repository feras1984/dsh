import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";
import {useTranslation} from "react-i18next";

const OrganizationalSection: React.FC<{blocks: BlockProps[]}> = ({blocks}) => {
    const {t} = useTranslation();
    return (
        <main className="flex-1 bg-background">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-8">
                        {blocks[0].title}
                    </h1>
                    <p className="text-lg text-muted-foreground mb-12">
                        {t('organizational-structure-hero')}
                    </p>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div
                            className="flex items-center justify-center min-h-[600px] border-2 border-dashed border-border rounded-lg">
                            <img className="w-full h-full text-primary"
                                 src={`/file/blocks/${blocks[0].images[0].url}`}
                                 alt="SDH Construction Site"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default OrganizationalSection;
