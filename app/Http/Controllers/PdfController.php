<?php

namespace App\Http\Controllers;

use App\Mail\SendPdfEmail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mpdf\Mpdf;



class PdfController extends Controller
{

    public function convertJsonToPdf(Request $request)
    {
        // Generate PDF and get the file path
        $this->generatePdf($request);

        // Send email with PDF attachment
        // Mail::to($request->input('evaristocordas@gmail.com'))
        //     ->send(new SendPdfEmail($pdfFilePath));

        return $this->generatePdf($request);
    }


    public function generatePdf(Request $request)
    {
        // Get data from the request
        $requestData = $request->all();
        $selectedService = $requestData['Selected Service'];

        // Initialize variables to store celebrant names
        $celebrantFirstName = '';
        $celebrantLastName = '';

        // Check if the 'celebrant' key contains an array
        if (isset($requestData['celebrant']) && is_array($requestData['celebrant'])) {
            // Loop through each celebrant object in the array
            foreach ($requestData['celebrant'] as $celebrant) {
                // Check if the 'label' key exists and equals 'First Name'
                if (isset($celebrant['label']) && $celebrant['label'] === 'First Name') {
                    // Get the value of 'celebrant_first_name' if it exists
                    $celebrantFirstName = isset($celebrant['celebrant_first_name']) ? $celebrant['celebrant_first_name'] : '';
                }
                // Check if the 'label' key exists and equals 'LastName'
                if (isset($celebrant['label']) && $celebrant['label'] === 'Last Name') {
                    // Get the value of 'celebrant_last_name' if it exists
                    $celebrantLastName = isset($celebrant['celebrant_last_name']) ? $celebrant['celebrant_last_name'] : '';
                }
            }
        }

        // Generate PDF content
        $pdfContent = $this->generatePdfContent($requestData);

        // Create mPDF instance
        $mpdf = new Mpdf();
        $mpdf->WriteHTML($pdfContent);

        // Concatenate values to create the PDF file name
        $pdfFileName = $selectedService . '_' . $celebrantFirstName . '_' . $celebrantLastName . '.pdf';

        // Save PDF to temporary location
        $pdfFilePath = storage_path('app/tmp/' . $pdfFileName);
        $mpdf->Output($pdfFilePath, 'F');

        return $pdfFileName;
    }

    
    private function generatePdfContent(array $data)
    {
        // Render the view with the provided data
        $htmlContent = view('pdf.template', compact('data'))->render();

        return $htmlContent;
    }
}
