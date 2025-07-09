import React from 'react';
import IndustryProps from "@/Interfaces/Site/IndustryProps";

const FilteredProjects: React.FC<{
    industries: IndustryProps [],
    getIndustry: (title: string) => void,
}> = ({industries, getIndustry}) => {
    const [selectedCategory, setSelectedCategory] = React.useState("All");

    const sendIndustry = (value: string)=> {
        getIndustry(value);
        setSelectedCategory(value);
    }

    // const filteredProjects = selectedCategory === "All"
    //     ? industries
    //     : industries.filter(industry => industry.title === selectedCategory);
    return (
        <section className="py-8 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        key={'All'}
                        onClick={() => sendIndustry('All')}
                        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                            selectedCategory === 'All'
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground'
                        }`}
                    >
                        All
                    </button>
                    {industries.map((industry) => (
                        <button
                            key={industry.title}
                            onClick={() => sendIndustry(industry.title)}
                            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                                selectedCategory === industry.title
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-card border border-border text-foreground hover:bg-primary hover:text-primary-foreground'
                            }`}
                        >
                            {industry.title}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FilteredProjects;
