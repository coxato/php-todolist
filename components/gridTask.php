<?php
    include_once 'task.php';

    // function que muestra una serie de columnas
    // El contenedor es una fila y a su vez una columna para que
    // su contenido no afecte el espacio de las de mas tareas.
    function createRowTasks($tasks, $count_task, $count = 1){
        echo "<div class='col-xs-12 col-lg-6 row m-0 p-0'>"; 
        while($count <= $count_task){
            $task = $tasks->fetch_assoc();
            renderTask($task);
            $count++;
        }
        echo "</div>";
    }
?>