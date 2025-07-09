<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::statement('
            CREATE OR REPLACE VIEW categories_view AS
            SELECT
                    cat_info.category_id,
                    cat_info.translation_id,
                    cat_info.parent_id,
                    cat_info.file_id,
                    cat_info.category_name,
                    parent_trans.name parent_name,
                    cat_info.category_description,
                    cat_info.language,
                    cat_info.category_order,
                    cat_info.is_active,
                    cat_info.url,
                    cat_info.file_name,
                    cat_info.file_description,
                    cat_info.is_image,
                    cat_info.is_cover
            FROM (
                SELECT
                    cat.id category_id,
                    trans.id translation_id,
                    cat.parent_id parent_id,
                    fl.id file_id,
                    trans.name category_name,
                    trans.description category_description,
                    trans.language,
                    cat.order category_order,
                    cat.is_active is_active,
                    fl.url,
                    fl.name file_name,
                    fl.description file_description,
                    fl.is_image,
                    fl.is_cover
               FROM
                    categories cat LEFT JOIN files fl
                    ON fl.reference_type = "Modules\\\Category\\\Entities\\\Category"
                    AND fl.reference_id = cat.id,
                    category_translations trans
                    WHERE cat.id = trans.category_id
                ) AS cat_info LEFT JOIN category_translations parent_trans
                    ON cat_info.parent_id = parent_trans.category_id
                    AND cat_info.language = parent_trans.language
                    ORDER BY cat_info.category_order, cat_info.parent_id ASC;
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS categories_view');
    }
};
