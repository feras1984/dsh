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
        Schema::create('block_categories', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug');
//            $table->string('description')->nullable();
            $table->string('block_type'); //home_slider, link, photo_gallery, video_gallery, blog
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        DB::statement("ALTER TABLE block_categories ADD description LONGBLOB NULL ");
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('block_categories');
    }
};
