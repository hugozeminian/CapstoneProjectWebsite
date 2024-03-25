<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('general_cards', function (Blueprint $table) {
            $table->string('video')->nullable();
            $table->date('date_info')->nullable();
            $table->time('time_info')->nullable();
            $table->string('location_info')->nullable();
            $table->string('eticket_link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('general_cards', function (Blueprint $table) {
            $table->dropColumn('video');
            $table->dropColumn('date_info');
            $table->dropColumn('time_info');
            $table->dropColumn('location_info');
            $table->dropColumn('eticket_link');
        });
    }
};
