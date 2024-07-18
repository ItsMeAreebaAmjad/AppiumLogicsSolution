<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "appium"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $stmt = $conn->prepare("INSERT INTO footerform (Name, Email, Message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        echo "<script>alert('Message sent successfully'); window.location.href = '../index.html';</script>";
    } else {
        echo "<script>alert('Error: " . $stmt->error . "'); window.location.href = '../index.html';</script>";
    }

    $stmt->close();
}

$conn->close();
?>
