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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('offer_id')->nullable(); //Reference for offer (offer, coupon, loyalty points).
            $table->string('order_number')->nullable();
            $table->string('offer_type')->nullable();
            $table->string('transaction_number')->nullable();
            $table->string('reference_token')->nullable();
            $table->double('total_price');
            $table->enum('status', [
                'pending',
                'processing',
                'onHold',
                'completed',
                'cancelled',
                'refunded',
                'failed',
            ])->default('pending');
            $table->string('currency');
            $table->boolean('is_paid')->default(false);
            $table->dateTime('payment_date')->nullable();
            $table->string('customer_notes');
            $table->boolean('is_archived')->default(false);
            $table->timestamps();

            $table->foreign('user_id')
                ->references('id')
                ->on('users')
                ->onUpdate('restrict')
                ->onDelete('restrict');

            $table->index(['offer_id', 'offer_type'], 'offer');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
};
