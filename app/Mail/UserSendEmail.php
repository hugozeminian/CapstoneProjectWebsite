<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;


class UserSendEmail extends Mailable
{
    use Queueable, SerializesModels;


    protected $request;
    protected $pdfFileName;
    protected $userEmail;

    /**
     * Create a new message instance.
     *
     * @param  Request  $request
     * @param  string  $pdfFilePathValue
     * @return void
     */
    public function __construct(Request $request, $pdfFileName)
    {
        $this->request = $request;
        $this->pdfFileName = $pdfFileName;
        $this->userEmail = $this->findCelebrantEmail($request);
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->from('leevaristo@yahoo.com.br')
            ->to($this->userEmail)
            ->subject('Client Request')
            ->attachFromStorage('tmp/'.$this->pdfFileName);
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'User Send Email',
        );
    }

    /**
     * Get the message content definition.
     *
     * @return \Illuminate\Mail\Mailables\Content
     */
    public function content()
    {
        
        return new Content(
            view: 'emails.pdf',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array
     */
    public function attachments()
    {
        return [];
    }


    private function findCelebrantEmail($request)
    {
        $celebrantEmail = null;
     

        // Loop through the celebrant array to find the email
        foreach ($request['celebrant'] as $item) {
            if (isset($item['label']) && $item['label'] === 'Email' && isset($item['celebrant_email'])) {
                $celebrantEmail = $item['celebrant_email'];
                break; // Found the email, no need to continue looping
            }
        }

        return $celebrantEmail;
    }
    
}
