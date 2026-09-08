<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $smtp_host = 'YOUR_SMTP_HOST';
    $smtp_port = 587;
    $smtp_user = 'YOUR_SMTP_USERNAME';
    $smtp_pass = 'YOUR_SMTP_PASSWORD';
    $smtp_from = 'hello@bodecreative.com';
    $smtp_to = 'hello@bodecreative.com';
    
    $nama = isset($_POST['nama']) ? htmlspecialchars(trim($_POST['nama'])) : '';
    $email = isset($_POST['email']) ? htmlspecialchars(trim($_POST['email'])) : '';
    $whatsapp = isset($_POST['whatsapp']) ? htmlspecialchars(trim($_POST['whatsapp'])) : '';
    $layanan = isset($_POST['layanan']) ? $_POST['layanan'] : [];
    $pesan = isset($_POST['pesan']) ? htmlspecialchars(trim($_POST['pesan'])) : '';
    
    if (empty($nama) || empty($email) || empty($pesan)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'pesan' => 'Name, email and message are required.']);
        exit;
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['status' => 'error', 'pesan' => 'Invalid email address.']);
        exit;
    }
    
    $subjek = 'New Enquiry from Bode Creative Website - ' . $nama;
    
    $isi_pesan = "New contact form submission:\n\n";
    $isi_pesan .= "Name: " . $nama . "\n";
    $isi_pesan .= "Email: " . $email . "\n";
    
    if (!empty($whatsapp)) {
        $isi_pesan .= "WhatsApp: " . $whatsapp . "\n";
    }
    
    if (!empty($layanan)) {
        $isi_pesan .= "Services Interested: " . implode(', ', $layanan) . "\n";
    }
    
    $isi_pesan .= "\nMessage:\n" . $pesan . "\n";
    
    $headers = "From: " . $smtp_from . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    
    if (mail($smtp_to, $subjek, $isi_pesan, $headers)) {
        echo json_encode(['status' => 'success', 'pesan' => 'Message sent successfully.']);
    } else {
        http_response_code(500);
        echo json_encode(['status' => 'error', 'pesan' => 'Failed to send message. Please try again.']);
    }
} else {
    http_response_code(405);
    echo json_encode(['status' => 'error', 'pesan' => 'Method not allowed.']);
}
?>
