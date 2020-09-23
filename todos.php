<?php 

include("db.php");

// create task
if(isset($_POST['title']) && isset($_POST['description'])){
    $title = $_POST['title'];
    $desc = $_POST['description'];
    
    // prepare query
    $stmt = $db->prepare("INSERT INTO task (title, description, completed) VALUES (?, ?, ?)");
    $params = 'ssi';
    $zeroFalse = 0;
    $stmt->bind_param($params, $title, $desc, $zeroFalse);
    
    $executed = $stmt->execute();
    echo json_encode([
        "ok" => $executed
    ]);

}


// delete task
if(isset($_POST['deleteId'])){
    $id = $_POST['deleteId'];
    
    // prepare query
    $stmt = $db->prepare("DELETE FROM task WHERE id=(?)");
    $params = 'i';
    $stmt->bind_param($params, $id);
    
    $executed = $stmt->execute();
    echo json_encode([
        "ok" => $executed
    ]);

}