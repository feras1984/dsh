import BlockProps from "@/Interfaces/Site/BlockProps";

interface IndustryProps extends BlockProps {
    executedProjects: number;
    underConstructionProjects: number;
}

export default IndustryProps;
