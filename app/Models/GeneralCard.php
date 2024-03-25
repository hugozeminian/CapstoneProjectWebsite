<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class GeneralCard extends Model
{
    protected $fillable = [
        'id','page','section', 'reference','title', 'desc', 'imgpath','video', 'date_info', 'time_info' ,'location_info', 'eticket_link',// Add other attributes as needed
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
        return asset('storage/' . $this->imgpath);
    }
}
