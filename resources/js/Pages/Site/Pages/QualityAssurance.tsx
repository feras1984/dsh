import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";

const QualityAssurance: React.FC<{blocks: BlockProps []}> = ({blocks}) => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Quality Assurance</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        At SDH, quality is not just a goal—it's our commitment. We implement rigorous quality
                        assurance processes to ensure every project meets the highest standards of excellence.
                    </p>
                </div>
            </section>

            <section className="p-20 bg-secondary/50">
                <p
                    className="text-muted-foreground text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{__html: blocks[0].description}}></p>
            </section>
        </div>
    );
};

export default QualityAssurance;
