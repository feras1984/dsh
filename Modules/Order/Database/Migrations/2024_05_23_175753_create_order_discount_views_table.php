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
        CREATE OR REPLACE VIEW order_discounts_view AS
        SELECT
        CASE
            WHEN d.is_percent IS NULL THEN o.total_price
            WHEN d.is_percent THEN o.total_price * (1 - d.amount / 100)
            ELSE o.total_price - d.amount
        END actual_price
        , o.is_paid, o.status, d.is_percent, d.amount, o.created_at
        FROM
        orders o LEFT JOIN order_discounts d
        ON o.id = d.order_id;
        ');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        DB::statement('DROP VIEW IF EXISTS order_discounts_view');
    }
};
