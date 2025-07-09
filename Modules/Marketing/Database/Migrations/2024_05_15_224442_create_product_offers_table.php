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
        CREATE OR REPLACE VIEW product_offers AS
        SELECT products.id as product_id,
        COALESCE(po.id, co.id) as offer_id,
        CASE
	        WHEN COALESCE(po.reference_type, co.reference_type) = "Modules\\\Product\\\Entities\\\Product" THEN "product"
            WHEN COALESCE(po.reference_type, co.reference_type) = "Modules\\\Category\\\Entities\\\Category" THEN "category"
        END as type,
	        COALESCE(po.is_active, co.is_active) as is_active,
	        COALESCE(po.is_percent, co.is_percent) as is_percent,
            COALESCE(po.amount, co.amount) as amount,
        CASE
	        WHEN COALESCE(po.start_date, co.start_date) <= NOW() AND COALESCE(po.end_date, co.end_date) >= NOW() THEN "valid"
            ELSE "expired"
        END as validity
        FROM products LEFT JOIN
        offers po ON
            po.is_active = 1 AND
            products.id = po.reference_id AND
            po.reference_type = "Modules\\\Product\\\Entities\\\Product" AND
            po.start_date <= NOW() AND
            po.end_date > NOW()
        INNER JOIN
        product_categories cat_list ON
        products.id = cat_list.product_id
        LEFT JOIN offers co	ON
            co.is_active = 1 AND
            products.id = cat_list.product_id AND
            cat_list.category_id = co.reference_id AND
            co.reference_type = "Modules\\\Category\\\Entities\\\Category" AND
            co.start_date <= NOW() AND
            co.end_date > NOW()
        WHERE po.id IS NOT NULL OR co.id IS NOT NULL;
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS product_offers');
    }
};
