<?php

require 'vendor/autoload.php';

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

$myemail = 'mihaita.barbu@zoho.com';


$fromName = strip_tags($_POST['nume']);
$fromEmail = strip_tags($_POST['email']);
$bodyMessage = strip_tags($_POST['bodyMessage']);

print_r($fromName."\n");
print_r($fromEmail."\n");
print_r($bodyMessage."\n");
print_r($myemail."\n");

if (isset($_POST['email']) && !empty($_POST['email'])) {

    $mandrill = new Mandrill(getenv('APP_KEY'));
        $message = array(
            'text' => $bodyMessage,
            'subject' => 'Contact SmileBit',
            'from_email' => $fromEmail,
            'from_name' => $fromName,
            'to' => array(
                        array(
                            'email' => $myemail,
                            'type' => 'to'
                        )
                    ),
    		'track_opens' => true,
    		'track_clicks' => true,
            'async' => true,
            'tags' => array(
                        'contact-smilebit'
                    )
        );
        $result = $mandrill->messages->send($message);
        print_r($result);
}