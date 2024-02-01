<?php
include('db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $fname = $_POST["fname"];
    $lname = $_POST["lname"];
    $gender = $_POST["gender"];
    $familyRole = $_POST["family_role"];
    $dob = $_POST["d_o_b"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    // Query to get the family ID (fid) based on the family role
    $familyRoleQuery = "SELECT fid FROM Family_name WHERE fid = '$familyRole'";
    $familyRoleResult = $conn->query($familyRoleQuery);

    if ($familyRoleResult === FALSE) {
        echo "Error: " . $familyRoleQuery . "<br>" . $conn->error;
    } elseif ($familyRoleResult->num_rows > 0) {
        $familyRoleRow = $familyRoleResult->fetch_assoc();
        $fid = $familyRoleRow["fid"];

        // Query to get the role ID (rid) based on some condition (replace with your condition)
        $roleQuery = "SELECT rid FROM Role WHERE rid ='$familyRole'";
        $roleResult = $conn->query($roleQuery);

        if ($roleResult === FALSE) {
            echo "Error: " . $roleQuery . "<br>" . $conn->error;
        } elseif ($roleResult->num_rows > 0) {
            $roleRow = $roleResult->fetch_assoc();
            $rid = $roleRow["rid"];

            // Now, use $fid and $rid in the INSERT query
            $sql = "INSERT INTO people (fname, lname, gender, dob, tel, email, passwd, fid, rid) 
                    VALUES ('$fname', '$lname', '$gender', '$dob', '$phone', '$email', '$password', '$fid', '$rid')";

            if ($conn->query($sql) === TRUE) {
                echo "Registration successful!";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        } else {
            echo "Error: Role not found.";
            echo "Error: " . $roleQuery . "<br>" . $conn->error;
        }
    } else {
        echo "Error: Family role not found.";
        echo "Error: " . $roleQuery . "<br>" . $conn->error;
    }
}

$conn->close();
?>
