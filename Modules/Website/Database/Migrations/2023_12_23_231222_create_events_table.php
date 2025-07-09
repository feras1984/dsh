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
        Schema::create('events', function (Blueprint $table) {
//            ===================================================
//            We can use category_id if we want to categorize events from DB.
//            Or we can categorize events using ENUM (Programmatically) using category field
//            Or we can use general events without (category_id, category) fields.
//            ===================================================
            $table->id();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->string('title');
//            $table->string('description')->nullable();
//            $table->string('language');
            $table->string('category')->nullable();
            $table->string('image')->nullable();
            $table->string('file')->nullable();
            $table->integer('order');
            $table->string('slug');
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->boolean('is_active')->default(true);
            $table->foreign('category_id')
                ->references('id')
                ->on('event_categories')
                ->onUpdate('cascade')
                ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('events');
    }
};
