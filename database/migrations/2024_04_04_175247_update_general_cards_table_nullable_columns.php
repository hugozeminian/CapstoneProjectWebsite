<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateGeneralCardsTableNullableColumns extends Migration
{
    public function up()
    {
        Schema::table('general_cards', function (Blueprint $table) {
            $table->string('title')->nullable()->change();
            $table->string('imgpath')->nullable()->change();
            $table->string('video')->nullable()->change();
            $table->date('date_info')->nullable()->change();
            $table->time('time_info')->nullable()->change();
            $table->string('location_info')->nullable()->change();
            $table->string('eticket_link')->nullable()->change();
        });
    }

    public function down()
    {
        // Revert the changes made in the 'up' method if necessary
    }
}
