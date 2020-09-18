<?php 

include("db.php");

if(isset($_POST['description'])){
    $desc = $_POST['description'];
    // prepare query
    $stmt = $db->prepare("INSERT INTO task (description, completed) VALUES (?, ?)");
    $params = 'si';
    $zeroFalse = 0;
    $stmt->bind_param($params, $desc, $zeroFalse);
    
    $stmt->execute();
}


