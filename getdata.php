<?php
// Database connection
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "project";

$conn = mysqli_connect($host, $user, $pass, $dbname);

if (!$conn) {
    die(json_encode(["status" => "error", "message" => "Database connection failed"]));
}

// Fetch data
$sql = "SELECT * FROM signup";
$result = mysqli_query($conn, $sql);

$data = [];

if ($result && mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
}

// Output JSON
header('Content-Type: application/json');
echo json_encode($data, JSON_PRETTY_PRINT);

mysqli_close($conn);
?>
