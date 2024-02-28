<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralcardsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('generalcards', function (Blueprint $table) {
            $table->id();
            $table->string('page')->nullable();
            $table->string('section')->nullable();
            $table->string('reference');
            $table->string('title');
            $table->text('description');
            $table->string('imgpath')->nullable();
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
        Schema::dropIfExists('generalcards');
    }
}
