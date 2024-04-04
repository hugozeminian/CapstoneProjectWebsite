<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\GeneralCard;
use Illuminate\Http\Response;

class GeneralCardController extends Controller
{
    public function getImageByReference($reference)
    {
        $card = GeneralCard::where('reference', $reference)->first();

        if (!$card) {
            abort(404);
        }
        return response()->file(storage_path('app/public/' . $card->imgpath));
    }


    public function getGeneralCardByReference($reference)
    {
        $card = GeneralCard::where('reference', $reference)->first();

        if (!$card) {
            return response()->json(['error' => 'GeneralCard not found'], 404);
        }

        // Update imgpath value
        $card->imgpath = "http://localhost/api/generalcard/image/$reference";

        // Return the GeneralCard as a JSON response
        return response()->json(['data' => $card], 200);
    }







    public function groupCardByReference($initialData, $reference)
    {
        // Grouped data array
        $groupedData = [];

        // Iterate through the initial data
        foreach ($initialData as $item) {
            // Extract the section value from the item
            $propertyKey = $item[$reference];

            // If the propertyKey key does not exist in the grouped data array, initialize it as an empty array
            if (!array_key_exists($propertyKey, $groupedData)) {
                $groupedData[$propertyKey] = [];
            }

            // Add the item to the corresponding propertyKey in the grouped data array
            $groupedData[$propertyKey][] = [
                'id' => $item['id'],
                'page' => $item['page'],
                'section' => $item['section'],
                'reference' => $item['reference'],
                'title' => $item['title'],
                'description' => $item['description'],
                'image_path' => $item['imgpath'],
                'video' => $item['video'],
                'date_info' => $item['date_info'],
                'time_info' => $item['time_info'],
                'location_info' => $item['location_info'],
                'eticket_link' => $item['eticket_link'],
                'created_at' => $item['created_at'],
                'updated_at' => $item['updated_at'],
            ];
        }
        return $groupedData;
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
            if (!is_null($card->imgpath)) {
                $card->imgpath = "http://localhost/api/generalcard/image/{$card->reference}";
            }
        });
        

        $groupedData = $this->groupCardByReference($cards,'section');

        return response()->json($groupedData, 200);
    }




    public function updateGeneralcardByReference($reference, Request $request)
    {

        $requestData = $request->all();

       
    
        // Convert the request data to JSON format
        $jsonData = json_encode($requestData);
        
        // Save JSON data to a file
        Storage::disk('public')->put('filename.json', $jsonData);







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

        if ($request->filled('video')) {
            $generalcard->video = $request->input('video');
        }

        if ($request->filled('date_info')) {
            $generalcard->date_info = $request->input('date_info');
        }

        if ($request->filled('time_info')) {
            $generalcard->time_info = $request->input('time_info');
        }

        if ($request->filled('location_info')) {
            $generalcard->location_info = $request->input('location_info');
        }

        if ($request->filled('eticket_link')) {
            $generalcard->eticket_link = $request->input('eticket_link');
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
        }else {
             if ($request->imagefile==='null' && !empty($generalcard->imgpath)) {
                Storage::disk('public')->delete($generalcard->imgpath);
               $generalcard->imgpath = null;
           }
        }


           
            
            
        

        // Save the updated general card
        $generalcard->save();

        return response()->json(['message' => 'General card updated or created successfully']);
    }


    public function updateMultipleGeneralCards(Request $request)
    {
        // Get the array of objects from the request
        $generalcardData = $request->all();
    
        // Iterate over each object in the request
        foreach ($generalcardData as $data) {
            // Find the general card by reference or create a new one
            $generalcard = Generalcard::firstOrNew(['reference' => $data['reference']]);
    
            // Update the general card information based on the request data
            $generalcard->fill($data);
    
            // Process the uploaded image if available
            if (isset($data['imagefile'])) {
                // Retrieve the uploaded image from the request
                $uploadedImage = $data['imagefile'];
    
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
        }
    
        return response()->json(['message' => 'General cards updated or created successfully']);
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



    public function response()
    {

        return response()->json(['OK'], Response::HTTP_OK);
    }
}
