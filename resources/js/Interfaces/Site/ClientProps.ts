import BlockProps from "@/Interfaces/Site/BlockProps";

interface ClientProps extends BlockProps {
    industry: string;
    executedProjects: number;
    underConstructionProjects: number;
}

export default ClientProps;
