<?php

namespace App\Http\Controllers\Api;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GeneralCard;

class GeneralCardController extends Controller
{
    public function getImageByReference($reference)
    {
        $card = GeneralCard::where('reference', $reference)->first();

        if(!$card){
            abort(404);
        }
        return response()->file(storage_path('app/public/'.$card->imgpath));
    }
    

public function getGeneralCardByReference($reference)
{
    $card = GeneralCard::where('reference', $reference)->first();

    if (!$card) {
        return response()->json(['error' => 'GeneralCard not found'], 404);
    }

    // Update imgpath value
    $card->imgpath = "http://localhost:8000/api/generalcard/image/$reference";

    // Return the GeneralCard as a JSON response
    return response()->json(['data' => $card], 200);
}


public function updateGeneralcardByReference($reference, Request $request)
{
    // Find the general card by reference or create a new one
    $generalcard = Generalcard::firstOrNew(['reference' => $reference]);

    // Update the general card information based on the request
    if ($request->filled('page')) {
        $generalcard->page = $request->input('page');
    }

    if ($request->filled('section')) {
        $generalcard->section = $request->input('section');
    }

    if ($request->filled('title')) {
        $generalcard->title = $request->input('title');
    }

    if ($request->filled('description')) {
        $generalcard->description = $request->input('description');
    }

    // Process the uploaded image
    if ($request->hasFile('imagefile')) {
        // Retrieve the uploaded image from the request
        $uploadedImage = $request->file('imagefile');

        // Check if the file is indeed an image
        if ($uploadedImage->isValid() && $uploadedImage->isFile()) {
            // Delete the old image from storage
            if (!empty($generalcard->imgpath)) {
                Storage::disk('public')->delete($generalcard->imgpath);
            }

            // Assuming you have a 'public/images' directory to store images
            $path = $uploadedImage->store('images', 'public');

            // Update the image path in the database
            $generalcard->imgpath = $path;
        } else {
            // Handle the case where the uploaded file is not a valid image
            return response()->json(['error' => 'Invalid image file'], 400);
        }
    }

    // Save the updated general card
    $generalcard->save();

    return response()->json(['message' => 'General card updated or created successfully']);
}



    public function getAllGeneralCards(Request $request)
    {
        $query = GeneralCard::query();

        // Apply filters
        if ($request->has('page')) {
            $query->where('page', $request->input('page'));
        }

        if ($request->has('section')) {
            $query->where('section', $request->input('section'));
        }

        if ($request->has('reference')) {
            $query->where('reference', $request->input('reference'));
        }

        if ($request->has('title')) {
            $query->where('title', $request->input('title'));
        }

        if ($request->has('description')) {
            $query->where('description', $request->input('description'));
        }

        $cards = $query->get();


    $cards->each(function ($card) {
        $card->imgpath = "http://localhost:8000/api/generalcard/image/{$card->reference}";
    });


        return response()->json(['data' => $cards], 200);
    }


public function deleteGeneralCardByReference($reference)
{
    // Find the GeneralCard by reference
    $card = GeneralCard::where('reference', $reference)->first();

    // Check if the GeneralCard exists
    if (!$card) {
        return response()->json(['error' => 'GeneralCard not found'], 404);
    }

    // Delete the associated image from storage if imgpath is not null
    if (!empty($card->imgpath)) {
        Storage::disk('public')->delete($card->imgpath);
    }

    // Delete the GeneralCard from the database
    $card->delete();

    return response()->json(['message' => 'GeneralCard deleted successfully'], 200);
}






}
