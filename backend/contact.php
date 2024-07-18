<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "appium";

// Create a database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the database connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process the form data when the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $firstname = htmlspecialchars(trim($_POST['firstname']));
    $lastname = htmlspecialchars(trim($_POST['lastname']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Prepare and bind the SQL statement
    $stmt = $conn->prepare("INSERT INTO contactform (firstName, lastName, Phone, Email, Subject, Message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssss", $firstname, $lastname, $phone, $email, $subject, $message);

    // Execute the statement and check for success
    if ($stmt->execute()) {
        echo "<script>alert('Message stored in the database successfully'); window.location.href = '../index.html';</script>";
    } else {
        echo "<script>alert('Error: " . $stmt->error . "'); window.location.href = '../index.html';</script>";
    }

    // Close the statement
    $stmt->close();
}

// Close the database connection
$conn->close();
?>
