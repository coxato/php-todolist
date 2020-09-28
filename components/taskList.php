  
<?php 
    include_once 'gridTask.php';

    $tasks = $db->query("SELECT * FROM task ORDER BY completed ASC");
    $columns = 2;
    $total_tasks = $tasks->num_rows;
    $tasks_per_columns = round($total_tasks / $columns);
?>

<h3 class="tasks mt-5 mb-4">Your tasks</h3>
<main class="row tasks-container">
    <?php 
        if ($total_tasks > 0){ 
            // creamos una columa del 1 a X columnas
            createRowTasks($tasks, $tasks_per_columns);

            // creamos otra columna desde X+1 hasta Y
            // incrementamos una unidad, para que no tome la tarea anterior
            createRowTasks($tasks, $total_tasks, $tasks_per_columns + 1);
        }else{
            echo "<strong>No there task</strong>";
        }
    ?>
</main>