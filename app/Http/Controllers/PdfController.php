<?php

namespace App\Http\Controllers;
use App\Mail\SendPdfEmail;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Mpdf\Mpdf;



class PdfController extends Controller
{

    public function sendPdfByEmail(Request $request)
    {
        // Generate PDF and get the file path
        $pdfFilePath = $this->generatePdf($request);

        // Send email with PDF attachment
        Mail::to($request->input('evaristocordas@gmail.com'))
            ->send(new SendPdfEmail($pdfFilePath));

        return 'Email sent successfully.';
    }


    public function generatePdf(Request $request)
    {
        // Generate PDF content
        $pdfContent = $this->generatePdfContent($request->all());

        // Create mPDF instance
        $mpdf = new Mpdf();
        $mpdf->WriteHTML($pdfContent);

        // Save PDF to temporary location
        $pdfFilePath = storage_path('app/tmp/generated_pdf.pdf');
        $mpdf->Output($pdfFilePath, 'F');

        return $pdfFilePath;
    }

    private function generatePdfContent(array $data)
{
    // Generate PDF content based on the data received
    // Example logic to generate HTML content
    $htmlContent = '<html><body>';
    foreach ($data as $item) {
        $title = isset($item['title']) ? $item['title'] : 'Title Not Available';
        $description = isset($item['description']) ? $item['description'] : 'Description Not Available';
        $htmlContent .= '<p>' . $title . ': ' . $description . '</p>';
    }
    $htmlContent .= '</body></html>';

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
