import {Block} from "@/models/block/Block";
import File from "@/models/files/File";

class Project extends Block{
    location: string;
    completionDate: string;
    value: number;
    isCompleted: boolean;
    progression: number;

    constructor({
                    location = '',
                    completionDate = '',
                    value = 0,
                    isCompleted = false,
                    progression = 100,
                    id = -1,
                    categoryId = -1,
                    parentId = -1,
                    category = '',
                    // name = '',
                    // description = '',
                    images = ([] as File []),
                    url = '',
                    file = '',
                    order = -1,
                    isActive = false,
                    startDate = '',
                    endDate = '',
                    createdAt = '',
                    translations = [],
                    files = [],
                    classification = '',
                }) {
        super({
            id,
            categoryId,
            parentId,
            category,
            images,
            url,
            file,
            order,
            isActive,
            startDate,
            endDate,
            createdAt,
            translations,
            files,
            classification,
        });
        this.location = location;
        this.completionDate = completionDate;
        this.value = value;
        this.isCompleted = isCompleted;
        this.progression = progression;
    }
}

export default Project;
