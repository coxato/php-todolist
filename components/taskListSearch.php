  
<?php 
    include_once "db.php";
    include_once 'task.php';

    $search = mysqli_real_escape_string($db, $_GET["search"]);
    $tasks = $db->query("SELECT * FROM task 
                        WHERE title LIKE '%$search%' 
                        ORDER BY completed ASC");
?>

<h3 class="tasks mt-5 mb-4">Results of <?php echo $search; ?></h3>
<main class="row tasks-container">
    <?php 
        if ($tasks->num_rows > 0){ 
            while($task = $tasks->fetch_assoc()){
            renderTask($task);
            }
        }else{
            echo "<strong>No there task found</strong>";
        }
    ?>
    
</main>
<footer class="mt-3">
    <a href="index.php">
        <i class="fa fa-arrow-left"></i> 
        Regresar al inicio
    </a>
</footer>
