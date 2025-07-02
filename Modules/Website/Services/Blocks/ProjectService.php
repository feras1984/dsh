<?php

namespace Modules\Website\Services\Blocks;

use Carbon\Carbon;
use Modules\File\Facades\UploadService;
use Modules\Website\Entities\Block;
use Modules\Website\Entities\Project;
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
            'progression' => $project->progression,
        ];
    }

    private function fillProjectForm(Project &$project, int $blockId): void
    {
        $data = request()->all();
        $project->fill([
            'block_id' => $blockId,
            'location' => $data['location'],
            'value' => $data['value'],
            'is_completed' => $data['isCompleted'] === 'true',
            'date_of_completion' => Carbon::make($data['dateOfCompletion']),
            'progression' => $data['progression'] ?? 100,
        ]);
    }

    public function storeBlock($data): array
    {
        $block = new Block();
//        $data = request()->all();
        $this->fillBlockForm($block);
        $block->save();
        //Store Translations:
        $this->storeTranslations($data, $block);
        //Store Files:
        //        2. Store File:
        if (array_key_exists('image', $data)) {
            $data['refId'] = $block->id;
            $data['refType'] = $this->reference;
            UploadService::saveFile($data, 'image', 'block');
        }

        $project = new Project();
        $this->fillProjectForm($project, $block->id);
        $project->save();
        return $this->mapBlockModel($block);
    }

    public function updateTranslations($data, Block $block) {
        parent::updateTranslations($data, $block);
        $project = $block->project()->first();
        $this->fillProjectForm($project, $block->id);
        $project->update();
        return Block::query()->where('id', $block->id)->first();
    }
}
