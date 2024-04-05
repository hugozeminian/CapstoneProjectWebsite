<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Http\Request;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Queue\SerializesModels;

class SendReachOutEmailToAdmin extends Mailable
{
    use Queueable, SerializesModels;

    public $request;
    public $adminEmail;

    /**
     * Create a new message instance.
     *
     * @param  Request  $request
     * @param  string  $adminEmail
     * @return void
     */
    public function __construct(Request $request, $adminEmail)
    {
        $this->request = $request;
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
            ->with('request', $this->request); 
    }

    /**
     * Get the message content.
     *
     * @return $this
     */
    public function content()
    {


         return new Content('emails.adminReachOutEmailBody');

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
