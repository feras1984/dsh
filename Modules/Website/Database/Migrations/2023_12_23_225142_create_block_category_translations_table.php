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
    public function up(): void
    {
        Schema::create('block_category_translations', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('name');
//            $table->string('description')->nullable();
            $table->string('slug');
            $table->boolean('is_active')->default(true);
            $table->string('language');
            $table->timestamps();

            $table->foreign('category_id')
                ->references('id')
                ->on('block_categories')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });

        DB::statement("ALTER TABLE block_category_translations ADD description LONGBLOB NULL ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('block_category_translations');
    }
};
