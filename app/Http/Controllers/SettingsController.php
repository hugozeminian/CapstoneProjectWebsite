<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SettingsController extends Controller
{

    protected $settings;
    protected $path;

    public function __construct()
    {

        $this->path = storage_path('app/settings/generalSettings.json');

        if (file_exists($this->path) && is_readable($this->path)) {
            // Attempt to decode the settings from the JSON file
            $this->settings = json_decode(file_get_contents($this->path), true);
        }
    }

    public function getAllSettings()
    {
        // Check if decoding was successful
        if ($this->settings !== null) {
            // If decoding was successful, return the settings
            return response()->json($this->settings);
        }

        // If the file doesn't exist, is empty, or decoding failed, return an empty array
        return response()->json([]);
    }

    public function getInternalSettings()
    {
        // Check if decoding was successful
        if ($this->settings !== null) {
            // If decoding was successful, return the settings
            return $this->settings;
        }

        // If the file doesn't exist, is empty, or decoding failed, return an empty array
        return [];
    }

    public function updateSettings(Request $request)
    {
        // Check if decoding was successful
        if ($this->settings === null) {
            // If decoding failed, initialize settings as an empty array
            $this->settings = [];
        }

        // Update the settings based on the incoming request data
        $this->settings = array_merge($this->settings, $request->all());

        // Save the updated settings back to the JSON file
        file_put_contents($this->path, json_encode($this->settings));

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'Settings updated successfully']);
    }

    public function getAdminEmailFromSettings()
    {
        $adminEmail = null;
        foreach ($this->settings['contactForm'] as $contactForm) {
            if ($contactForm['ref'] === 'contactForm-1') {
                // Access the desired property
                $adminEmail = $contactForm['link'];
                break; // Exit the loop once the desired element is found
            }
        }
        return $adminEmail;
    }
}
