<?php

namespace Modules\Website\Services\Blocks;

use Modules\Website\Entities\Block;
use Modules\Website\Enums\BlockCategoryEnum;
use Modules\Website\Services\Blocks\BlockService;
use Modules\Website\Facades\Blocks\IndustryService;


class ClientService extends BlockService
{
    public function getActiveBlocks($category): array
    {
        $blocks = $this->getActiveRawBlocks($category);
        $industries = IndustryService::getActiveBlocks(BlockCategoryEnum::INDUSTRIES->value);
        $clientsModel = [];

        foreach ($blocks as $client) {
            $industryName = $this->getBlockName($client->parent);
            $executedProjects = 0;
            $underConstructionProjects = 0;
            foreach ($client->children as $project) {
                if ($project->project->is_completed) {
                    $executedProjects++;
                } else {
                    $underConstructionProjects++;
                }
            }
            $clientsModel[] = [
                ...$this->mapLocaleBlock($client),
                'industry' => $industryName,
                'executedProjects' => $executedProjects,
                'underConstructionProjects' => $underConstructionProjects,
            ];
        }

        return array_merge($clientsModel, $industries);
    }
}
