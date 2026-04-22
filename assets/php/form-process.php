<?php

// SMTP Configuration
define('SMTP_HOST', 'kdshippingplus.net');
define('SMTP_PORT', 465);
define('SMTP_USER', 'contact@kdshippingplus.net');
define('SMTP_PASS', 'PASScode123@#');
define('SMTP_FROM', 'contact@kdshippingplus.net');
define('SMTP_FROM_NAME', 'KD Shipping Plus');

// Admin Emails
$adminEmails = [
    'staff@kdshippingplus.com',
    'admin@kdshippingplus.com',
    'bruce@nextlevelrankers.com'
];

$errorMSG = "";

// Field Extraction
$name = $_POST["name"] ?? "";
$email = $_POST["email"] ?? "";
$phone = $_POST["phone_number"] ?? "";
$subject = $_POST["msg_subject"] ?? "New Inquiry";
$message = $_POST["message"] ?? "";
$card_quantity = $_POST["card_quantity"] ?? "";
$card_type = $_POST["card_type"] ?? "";
$card_design = $_POST["card_design"] ?? "";

// Validation
if (empty($name)) { $errorMSG .= "Name is required. "; }
if (empty($email)) { $errorMSG .= "Email is required. "; }
if (empty($message)) { $errorMSG .= "Message is required. "; }

if ($errorMSG != "") {
    echo $errorMSG;
    exit;
}

/**
 * Extremely lightweight SMTP client for PHP
 * Handles SSL/TLS and Basic Auth
 */
class SimpleSMTP {
    private $socket;
    private $error;

    public function send($to, $subject, $body, $from, $fromName) {
        $header = "To: $to\r\n";
        $header .= "From: $fromName <$from>\r\n";
        $header .= "Subject: $subject\r\n";
        $header .= "MIME-Version: 1.0\r\n";
        $header .= "Content-Type: text/html; charset=UTF-8\r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . "\r\n\r\n";

        $full_message = $header . $body;

        try {
            $this->socket = fsockopen("ssl://" . SMTP_HOST, SMTP_PORT, $errno, $errstr, 30);
            if (!$this->socket) throw new Exception("Could not connect: $errstr");

            $this->expect(220);
            $this->command("EHLO " . $_SERVER['HTTP_HOST'], 250);
            $this->command("AUTH LOGIN", 334);
            $this->command(base64_encode(SMTP_USER), 334);
            $this->command(base64_encode(SMTP_PASS), 235);
            $this->command("MAIL FROM: <" . SMTP_USER . ">", 250);
            $this->command("RCPT TO: <$to>", 250);
            $this->command("DATA", 354);
            $this->command($full_message . "\r\n.", 250);
            $this->command("QUIT", 221);
            fclose($this->socket);
            return true;
        } catch (Exception $e) {
            $this->error = $e->getMessage();
            return false;
        }
    }

    private function command($cmd, $expected) {
        fwrite($this->socket, $cmd . "\r\n");
        return $this->expect($expected);
    }

    private function expect($code) {
        $res = "";
        while ($str = fgets($this->socket, 515)) {
            $res .= $str;
            if (substr($str, 3, 1) == " ") break;
        }
        if (substr($res, 0, 3) != $code) throw new Exception("SMTP Error: " . $res);
        return $res;
    }

    public function getError() { return $this->error; }
}

// Prepare Admin Email Body
$adminBody = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;'>
    <div style='background: #004a99; color: white; padding: 20px; text-align: center;'>
        <h1 style='margin: 0; font-size: 24px;'>New Lead Received</h1>
    </div>
    <div style='padding: 20px; color: #333; line-height: 1.6;'>
        <p>You have received a new message from the <strong>KD Shipping Plus</strong> contact form.</p>
        <hr style='border: 0; border-top: 1px solid #eee; margin: 20px 0;'>
        <table style='width: 100%; border-collapse: collapse;'>
            <tr><td style='padding: 8px 0; font-weight: bold; width: 120px;'>Name:</td><td>{$name}</td></tr>
            <tr><td style='padding: 8px 0; font-weight: bold;'>Email:</td><td>{$email}</td></tr>
            <tr><td style='padding: 8px 0; font-weight: bold;'>Phone:</td><td>{$phone}</td></tr>
            <tr><td style='padding: 8px 0; font-weight: bold;'>Service:</td><td>{$subject}</td></tr>";

if ($subject === "Business Cards") {
    $adminBody .= "
            <tr><td style='padding: 8px 0; font-weight: bold;'>Quantity:</td><td>{$card_quantity}</td></tr>
            <tr><td style='padding: 8px 0; font-weight: bold;'>Card Type:</td><td>{$card_type}</td></tr>
            <tr><td style='padding: 8px 0; font-weight: bold;'>Design:</td><td>{$card_design}</td></tr>";
}

$adminBody .= "
        </table>
        <div style='margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #004a99; border-radius: 4px;'>
            <strong>Message:</strong><br>
            " . nl2br(htmlspecialchars($message)) . "
        </div>
    </div>
    <div style='background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;'>
        Sent via KD Shipping Plus Contact Form
    </div>
</div>";

// Prepare User Confirmation Email Body
$userBody = "
<div style='font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden;'>
    <div style='background: #004a99; color: white; padding: 20px; text-align: center;'>
        <h1 style='margin: 0; font-size: 24px;'>Message Received!</h1>
    </div>
    <div style='padding: 20px; color: #333; line-height: 1.6;'>
        <p>Hello <strong>{$name}</strong>,</p>
        <p>Thank you for reaching out to <strong>KD Shipping Plus</strong>. We have received your inquiry regarding <strong>{$subject}</strong> and our team will get back to you as soon as possible.</p>
        <p>In the meantime, feel free to visit us or call if you have any urgent needs.</p>
        <hr style='border: 0; border-top: 1px solid #eee; margin: 20px 0;'>
        <div style='text-align: center;'>
            <p style='margin: 5px 0;'><strong>KD Shipping Plus</strong></p>
            <p style='margin: 5px 0; font-size: 14px;'>2041 Rufe Snow Dr #101, Keller, TX 76248</p>
            <p style='margin: 5px 0; font-size: 14px;'>(817) 576-4174</p>
        </div>
    </div>
    <div style='background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777;'>
        &copy; " . date('Y') . " KD Shipping Plus. All rights reserved.
    </div>
</div>";

$smtp = new SimpleSMTP();

// Send to Admins
$success = true;
foreach ($adminEmails as $adminEmail) {
    if (!$smtp->send($adminEmail, "New Lead: " . $subject, $adminBody, SMTP_FROM, "KD Shipping Lead")) {
        $success = false;
    }
}

// Send Confirmation to User
$smtp->send($email, "We've received your message - KD Shipping Plus", $userBody, SMTP_FROM, SMTP_FROM_NAME);

if ($success) {
    echo "success";
} else {
    echo "Error sending email: " . $smtp->getError();
}
?>