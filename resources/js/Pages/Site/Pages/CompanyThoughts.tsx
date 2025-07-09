import React from 'react';
import BlockProps from "@/Interfaces/Site/BlockProps";

const CompanyThoughts: React.FC<{blocks: BlockProps []}> = ({blocks}) => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Company Thoughts</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Our philosophy, values, and vision for the future of construction.
                        These thoughts guide every decision we make and every project we undertake.
                    </p>
                </div>
            </section>

            <section className="p-20 bg-secondary/50">
                <p
                    className="text-muted-foreground text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{__html: blocks[0].description}}></p>
            </section>

            {/* Call to Reflection */}
            <section className="py-20 bg-primary text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        These thoughts and visions drive us forward every day. We invite you to be part of
                        this journey as we build not just structures, but a better future for all.
                    </p>
                    <p className="text-lg italic max-w-2xl mx-auto">
                        "The best time to plant a tree was 20 years ago. The second best time is now.
                        The same is true for sustainable, thoughtful construction."
                    </p>
                </div>
            </section>
        </div>
);
};

export default CompanyThoughts;
