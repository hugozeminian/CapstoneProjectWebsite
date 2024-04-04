<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;


class SendEmailToAdmin extends Mailable
{
    use Queueable, SerializesModels;


    protected $request;
    protected $pdfFileName;
    protected $adminEmail;

    /**
     * Create a new message instance.
     *
     * @param  Request  $request
     * @param  string  $pdfFilePathValue
     * @return void
     */
    public function __construct(Request $request, $pdfFileName,$adminEmail)
    {
        $this->request = $request;
        $this->pdfFileName = $pdfFileName;
        $this->adminEmail = $adminEmail;
       
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
            ->to($this->adminEmail)
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
            view: 'emails.adminEmailBody',
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
    
}
