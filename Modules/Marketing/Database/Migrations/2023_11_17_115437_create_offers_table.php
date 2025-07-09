<?php

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
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('reference_id');
            $table->string('reference_type');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_percent')->default(true);
            $table->float('amount');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->timestamps();

            $table->index(['reference_id', 'reference_type'], 'reference');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
    }
};
