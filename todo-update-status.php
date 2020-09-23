<?php 

include("db.php");

if(isset($_POST['id']) && isset($_POST['completed'])){
    $id = $_POST['id'];
    $completed = $_POST['completed'];
    
    // prepare query
    $stmt = $db->prepare("UPDATE task SET completed=$completed WHERE id=$id");
    $executed = $stmt->execute();
    echo json_encode([
        "id" => $id,
        "completed" => $completed,
        "executed" => $executed 
    ]);

}