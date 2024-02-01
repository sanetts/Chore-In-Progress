<?php
include('db.php');

// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $choreName = $_POST["chore_name"];
    $assignedBy = $_POST["assigned_by"];
    $dueDate = $_POST["due_date"];

    // Assuming you have a chore name-to-id mapping in your Chores table
    $choreQuery = "SELECT cid FROM Chores WHERE chorname = '$choreName'";
    $choreResult = $conn->query($choreQuery);

    if ($choreResult === FALSE) {
        echo "Error: " . $choreQuery . "<br>" . $conn->error;
    } elseif ($choreResult->num_rows > 0) {
        $row = $choreResult->fetch_assoc();
        $choreId = $row["cid"];

        // Insert the assignment into the Assignment table
        $insertQuery = "INSERT INTO Assignment (cid, sid, date_assign, date_due, who_assigned) 
                        VALUES ('$choreId', 1, NOW(), '$dueDate', '$assignedBy')";

        if ($conn->query($insertQuery) === TRUE) {
            echo "Chore assigned successfully!";
        } else {
            echo "Error: " . $insertQuery . "<br>" . $conn->error;
        }
    } else {
        echo "Error: Chore not found.";
    }
} else if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Mark chore as completed (GET request)
    $choreId = $_GET["chore_id"];

    // Update the chore status in the Assignment table
    $updateQuery = "UPDATE Assignment SET sid = 3, date_completed = NOW() WHERE assignmentid = '$choreId'";

    if ($conn->query($updateQuery) === TRUE) {
        echo "Chore marked as completed!";
    } else {
        echo "Error: " . $updateQuery . "<br>" . $conn->error;
    }
}

$conn->close();
?>
