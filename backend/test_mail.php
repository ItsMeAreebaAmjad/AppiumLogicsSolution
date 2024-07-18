<?php
$to = 'areebaamjad81@gmail.com';
$subject = 'Test Email';
$message = 'This is a test email.';
$headers = 'From: areebaamjadareebaamjad@gmail.com' . "\r\n" .
           'Reply-To: areebaamjadareebaamjad@gmail.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Failed to send email.';
}
?>
