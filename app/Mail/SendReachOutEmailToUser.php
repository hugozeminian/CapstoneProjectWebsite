<?php

namespace App\Mail;

use Illuminate\Http\Request;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;


class SendReachOutEmailToUser extends Mailable
{
    use Queueable, SerializesModels;


    protected $request;
    protected $userEmail;

    /**
     * Create a new message instance.
     *
     * @param  Request  $request
     * @param  string  $pdfFilePathValue
     * @return void
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
        $this->userEmail = $this->findClientEmail($request);
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
            ->subject('Client Request');
    }

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'Milestone Cerimonies(automatic response)',
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
            view: 'emails.userReachOutEmailBody',
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


    private function findClientEmail($request)
    {
        $celebrantEmail = null;
     

        // Loop through the celebrant array to find the email
        foreach ($request['client'] as $item) {
            if (isset($item['label']) && $item['label'] === 'Email' && isset($item['client_email'])) {
                $celebrantEmail = $item['client_email'];
                break; // Found the email, no need to continue looping
            }
        }

        return $celebrantEmail;
    }
    
}
