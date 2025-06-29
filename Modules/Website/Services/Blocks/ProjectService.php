<?php

namespace Modules\Website\Services\Blocks;

use Modules\Website\Entities\Block;
use Modules\Website\Services\Blocks\BlockService;

class ProjectService extends BlockService
{
    public function mapBlockModel(Block $block): array
    {
        $project = $block->project()->first();
        return [
            ...parent::mapBlockModel($block),
            'location' => $project->location,
            'completionDate' => $project->date_of_completion,
            'value' => $project->value,
            'isCompleted' => (bool)$project->is_completed,
        ];
    }
}
