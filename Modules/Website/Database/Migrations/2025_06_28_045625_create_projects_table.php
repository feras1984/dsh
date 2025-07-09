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
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('block_id');
            $table->string('location');
            $table->dateTime('date_of_completion');
            $table->unsignedDecimal('value', 15, 2)->nullable();
            $table->boolean('is_completed');
            $table->timestamps();

            $table
                ->foreign('block_id')
                ->references('id')
                ->on('blocks')
                ->onDelete('cascade')
                ->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('projects');
    }
};
