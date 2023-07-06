<?php
require_once('recaptcha_credentials.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Verify reCAPTCHA response token
  $recaptcha_response = $_POST["recaptcha_response"];
  $url = 'https://www.google.com/recaptcha/api/siteverify';
  $data = [
    'secret' => RECAPTCHA_SECRET_KEY,
    'response' => $recaptcha_response
  ];

  $options = [
    'http' => [
      'header' => "Content-type: application/x-www-form-urlencoded\r\n",
      'method' => 'POST',
      'content' => http_build_query($data)
    ]
  ];

  $context = stream_context_create($options);
  $result = file_get_contents($url, false, $context);
  $response = json_decode($result, true);

  // Check if reCAPTCHA verification was successful
  if ($response['success'] && $response['score'] >= 0.5) {
    
    /**
     * Do whatever you want to do with the form data
     * Write your business logic here
     **/ 
    
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully!']);
} else {
    // Handle reCAPTCHA verification failure
    echo json_encode(['success' => false, 'message' => 'reCAPTCHA verification failed. Please try again.']);
  }
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid Request.']);
}
?>
