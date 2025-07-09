<?php

namespace Modules\Website\Services\Blocks;

use Modules\Website\Services\Blocks\BlockService;

class IndustryService extends BlockService
{
    public function getActiveBlocks(string $category): array
    {
        $blocks = $this->getActiveRawBlocks($category);
        $blocksModel = [];

//        dd($blocks);
        foreach ($blocks as $industry) {
            $executedProjects = 0;
            $underConstructionProjects = 0;
            foreach ($industry->children as $client) {
                foreach ($client->children as $project) {
                    if ($project->project->is_completed) {
                        $executedProjects++;
                    } else {
                        $underConstructionProjects++;
                    }
                }
            }

            $blocksModel[] = [
                ...$this->mapLocaleBlock($industry),
                'executedProjects' => $executedProjects,
                'underConstructionProjects' => $underConstructionProjects,
            ];
        }
        return $blocksModel;
    }
}
