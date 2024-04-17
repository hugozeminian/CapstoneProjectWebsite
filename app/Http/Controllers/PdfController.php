<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mpdf\Mpdf;
use Illuminate\Support\Facades\File;



class PdfController extends Controller
{
    public $pdfFileName;

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

        // Initialize variables to store client names
        $clientFirstName = '';
        $clientLastName = '';

        // Check if the 'client' key contains an array
        if (isset($requestData['client']) && is_array($requestData['client'])) {
            // Loop through each client object in the array
            foreach ($requestData['client'] as $client) {
                // Check if the 'label' key exists and equals 'First Name'
                if (isset($client['label']) && $client['label'] === 'First Name') {
                    // Get the value of 'client_first_name' if it exists
                    $clientFirstName = isset($client['client_first_name']) ? $client['client_first_name'] : '';
                }
                // Check if the 'label' key exists and equals 'LastName'
                if (isset($client['label']) && $client['label'] === 'Last Name') {
                    // Get the value of 'client_last_name' if it exists
                    $clientLastName = isset($client['client_last_name']) ? $client['client_last_name'] : '';
                }
            }
        }

        // Generate PDF content
        $pdfContent = $this->generatePdfContent($requestData);

        // Create mPDF instance
        $mpdf = new Mpdf();
        $mpdf->WriteHTML($pdfContent);

        // Concatenate values to create the PDF file name
        $pdfFileName = $selectedService . '_' . $clientFirstName . '_' . $clientLastName . '.pdf';
        $this->pdfFileName = $pdfFileName;

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

/**
 * Delete the generated PDF file.
 *
 * @return string
 */

   public function deletePdf()
   {
       // Construct the file path to the PDF
       $pdfFilePath = storage_path('app/tmp/' . $this->pdfFileName);
   
       // Check if the file exists
       if (File::exists($pdfFilePath)) {
           // Delete the file
           File::delete($pdfFilePath);
   
           // Return success message
           return 'PDF file deleted successfully';
       } else {
           // Return error message
           return 'PDF file not found';
       }
   }





}
