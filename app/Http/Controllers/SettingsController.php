<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SettingsController extends Controller
{

    public function getAllSettings()
    {
        // Get the path to the settings JSON file
        $path = storage_path('app/settings/generalSettings.json');

        // Check if the file exists and is readable
        if (file_exists($path) && is_readable($path)) {
            // Attempt to decode the settings from the JSON file
            $settings = json_decode(file_get_contents($path), true);

            // Check if decoding was successful
            if ($settings !== null) {
                // If decoding was successful, return the settings
                return response()->json($settings);
            }
        }

        // If the file doesn't exist, is empty, or decoding failed, return an empty array
        return response()->json([]);
    }

    
    public function updateSettings(Request $request)
    {
        // Validate incoming request data as needed
        $request->validate([
            // Add validation rules here if required
        ]);

        // Get the path to the settings JSON file
        $path = storage_path('app/settings/generalSettings.json');

        // Initialize settings as an empty array
        $settings = [];

        // Check if the file exists and is readable
        if (file_exists($path) && is_readable($path)) {
            // Attempt to decode the existing settings from the JSON file
            $settings = json_decode(file_get_contents($path), true);

            // Check if decoding was successful
            if ($settings === null) {
                // If decoding failed, initialize settings as an empty array
                $settings = [];
            }
        }

        // Update the settings based on the incoming request data
        $settings = array_merge($settings, $request->all());

        // Save the updated settings back to the JSON file
        file_put_contents($path, json_encode($settings));

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Settings updated successfully']);
    }


}
