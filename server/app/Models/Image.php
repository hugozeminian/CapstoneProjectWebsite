<?php
// app/Models/Image.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    protected $fillable = [
        'id', 'name', 'path', // Add other attributes as needed
    ];

    // You can define relationships or other methods here

    /**
     * Get the URL for the image.
     *
     * @return string
     */
    public function getImageUrl()
    {
        // Assuming your images are stored in the 'public' disk
        return asset('storage/' . $this->path);
    }
}
