<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContactMeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('contact_me', function (Blueprint $table) {
            $table->id();
            $table->string('ref')->unique();
            $table->string('title');
            $table->string('number');
            $table->string('number_icon');
            $table->string('number_icon_hover');
            $table->string('email');
            $table->string('email_icon');
            $table->string('email_icon_hover');
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
        Schema::dropIfExists('contact_me');
    }
}

