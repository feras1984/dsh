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
        Schema::create('articles', function (Blueprint $table) {
//            ===================================================
//            We can use category_id if we want to categorize articles from DB.
//            Or we can categorize articles using ENUM (Programmatically) using category field
//            Or we can use general articles without (category_id, category) fields.
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
            $table->dateTime('date');
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('article_categories')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });

//        DB::statement("ALTER TABLE articles ADD description LONGBLOB NULL ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('articles');
    }
};
