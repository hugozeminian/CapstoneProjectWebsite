<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use App\Models\Image; // Replace with your actual Image model


class ImageController extends Controller
{
    public function getImageByName($name)
    {
        $image = Image::where('name', $name)->first();

        if (!$image) {
            // Image not found, return a 404 response or handle it as needed
            abort(404);
        }

        // You may need to adjust the headers based on the image type (jpeg, png, etc.)
        return response()->file(storage_path('app/public/' . $image->path));
    }



public function updateImage($name, Request $request)
{
    // Find the image by name or create a new one
    $image = Image::firstOrNew(['name' => $name]);

    // Process the uploaded image
    if ($request->hasFile('imagefile')) {
        // Retrieve the uploaded image from the request
        $uploadedImage = $request->imagefile;

        // Check if the file is indeed an image
        if ($uploadedImage->isValid() && $uploadedImage->isFile()) {
            // Delete the old image from storage
            if (!empty($image->path)) {
                Storage::disk('public')->delete($image->path);
            }

            // Assuming you have a 'public/images' directory to store images
            $path = $uploadedImage->store('images', 'public');

            // Update the image path in the database
            $image->path = $path;
            $image->save();

            return response()->json(['message' => 'Image updated or created successfully']);
        } else {
            // Handle the case where the uploaded file is not a valid image
            return response()->json(['error' => 'Invalid image file'], 400);
        }
    }

    return response()->json(['error' => 'No image provided'], 400);
}



}
