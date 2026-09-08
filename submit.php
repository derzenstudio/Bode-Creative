<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed']);
    exit;
}

$nama = filter_input(INPUT_POST, 'nama', FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$whatsapp = filter_input(INPUT_POST, 'whatsapp', FILTER_SANITIZE_SPECIAL_CHARS);
$layanan = filter_input(INPUT_POST, 'layanan', FILTER_SANITIZE_SPECIAL_CHARS);
$pesan = filter_input(INPUT_POST, 'pesan', FILTER_SANITIZE_SPECIAL_CHARS);

$errors = [];

if (empty($nama)) {
    $errors[] = 'Name is required';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}

if (empty($whatsapp)) {
    $errors[] = 'WhatsApp number is required';
}

if (empty($pesan)) {
    $errors[] = 'Message is required';
}

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['status' => 'error', 'errors' => $errors]);
    exit;
}

$to = 'hello@bodecreative.com';
$subject = 'New Contact Form Submission from ' . $nama;

$body = "New inquiry from Bode Creative website:\n\n";
$body .= "Name: {$nama}\n";
$body .= "Email: {$email}\n";
$body .= "WhatsApp: {$whatsapp}\n";
$body .= "Services: {$layanan}\n";
$body .= "Message:\n{$pesan}\n";

$headers = "From: noreply@bodecreative.com\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$smtp_host = 'smtp.yourprovider.com';
$smtp_port = 587;
$smtp_username = 'your_username';
$smtp_password = 'your_password';
$smtp_secure = 'tls';

$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    echo json_encode(['status' => 'success', 'message' => 'Thank you. We will contact you within 48 hours.']);
} else {
    http_response_code(500);
    echo json_encode(['status' => 'error', 'message' => 'Failed to send message. Please try again or contact us via WhatsApp.']);
}
