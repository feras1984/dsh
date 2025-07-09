import BlockProps from "@/Interfaces/Site/BlockProps";

interface ProjectProps extends BlockProps {
    industry: string;
    client: string;
    location: string;
    completionDate: string;
    value: number;
    isCompleted: boolean;
    progression: number;
    status: string;
}

export default ProjectProps;
