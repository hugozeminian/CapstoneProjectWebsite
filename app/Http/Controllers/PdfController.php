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

    return response()->json(['pdf_file_path' => $pdfFilePath], 200);
}



private function generatePdfContent(array $data)
{
    // Render the view with the provided data
    $htmlContent = view('pdf.template', compact('data'))->render();

    return $htmlContent;
}




























    // public function generatePdf(Request $request)
    // {
    //     // Validate the incoming JSON data
    //     $request->validate([
    //         'carrousel' => 'required|array',
    //         'section2_phrase' => 'required|array',
    //     ]);

    //     // Process the JSON data
    //     $carrousel = $request->input('carrousel');
    //     $section2Phrase = $request->input('section2_phrase');

       
    //     $pdfTemplate = view('pdf.template', compact('carrousel'))->render();
        

    //     // Add carrousel items to the HTML content
    //     foreach ($carrousel as $item) {
    //         $pdfTemplate .= '<li>' . $item['reference'] . ': ' . $item['description'] . '</li>';
    //     }

    //     $pdfTemplate .= '</ul>
    //         <h2>Section 2 Phrase</h2>
    //         <ul>';

    //     // Add section 2 phrase items to the HTML content
    //     foreach ($section2Phrase as $item) {
    //         $pdfTemplate .= '<li>' . $item['reference'] . ': ' . $item['description'] . '</li>';
    //     }

    //     $pdfTemplate .= '</ul>
    //     </body>
    //     </html>';

    //     // Create a new MPDF instance
    //     $mpdf = new Mpdf();

    //     // Write the PDF content
    //     $mpdf->WriteHTML($pdfTemplate);

    //     // Output the PDF
    //     return response($mpdf->Output(), 200, [
    //         'Content-Type' => 'application/pdf',
    //         'Content-Disposition' => 'inline; filename="generated_pdf.pdf"',
    //     ]);

    //     // // Return the HTML content with appropriate headers
    //     // return response($pdfTemplate)
    //     //     ->header('Content-Type', 'text/html');
    // }
}
