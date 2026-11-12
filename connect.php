<?php
$host = "localhost";
$user = "root";
$password = "";                  // XAMPP default is empty
$database = "db_ET4132_Group1";  // create this in phpMyAdmin first

$conn = mysqli_connect($host, $user, $password, $database);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully!";
?>