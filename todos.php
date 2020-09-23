<?php 

include("db.php");

if(isset($_POST['title']) && isset($_POST['description'])){
    $title = $_POST['title'];
    $desc = $_POST['description'];
    
    // prepare query
    $stmt = $db->prepare("INSERT INTO task (title, description, fecha, completed) VALUES (?, ?, NOW(), ?)");
    $params = 'ssi';
    $zeroFalse = 0;
    $stmt->bind_param($params, $title, $desc, $zeroFalse);
    
    $executed = $stmt->execute();
    echo json_encode([
        "title" => $title,
        "description" => $desc
    ]);

}
