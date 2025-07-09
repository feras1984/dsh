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
        Schema::create('article_category_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('name');
//            $table->string('description')->nullable();
            $table->string('language');
            $table->string('slug');
            $table->boolean('is_active')->default(true);
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('article_categories')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
        DB::statement("ALTER TABLE article_category_translations ADD description LONGBLOB NULL ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('article_category_translations');
    }
};
