  
<?php 
    include_once 'task.php';
    $tasks = $db->query("SELECT * FROM task ORDER BY completed ASC");
?>

<h3 class="tasks mt-5 mb-4">Your tasks</h3>
<main class="row tasks-container">
    <?php 
        if ($tasks->num_rows > 0){ 
            while($task = $tasks->fetch_assoc()){
            renderTask($task);
            }
        }else{
            echo "<strong>No there task</strong>";
        }
    ?>
</main>