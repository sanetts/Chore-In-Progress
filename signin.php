<?php

include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $email = mysqli_real_escape_string($conn, $email);
    $password = mysqli_real_escape_string($conn, $password);

echo 'one';
    $sql = "SELECT * FROM People WHERE email = '$email'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        if (password_verify($password, $row["passwd"])) {
            echo "Login successful!";
            // Redirect to the dashboard or another page upon successful login
            header("Location: home.php");
            exit();
        } else {
            echo "Incorrect password. Please try again.";
        }
    } else {
        echo "User not found. Please check your email.";
    }
}

// Close the database connection
$conn->close();
?>
