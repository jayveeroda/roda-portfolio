<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    $to = "rodajohnvincent35@gmail.com";
    $subject = "New Message from Contact Form";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $headers = "From: $email";

    if (mail($to, $subject, $email_content, $headers)) {
        header("Location: thank-you.html");
        echo "mao ba";
    } else {
        echo "Oops! Something went wrong and we couldn't send your message.";
    }
}
?>
