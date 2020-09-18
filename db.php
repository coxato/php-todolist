<?php 

$host = "localhost";
$username = "root";
$password = "";
$db_name = "todolistphp";

$db = new mysqli($host, $username, $password, $db_name);

if($db->connect_error){
    die("error al conectar");
}

