<?php 
    $tasks = $db->query("SELECT * FROM task");
?>

<div class="tasks-container">
    <?php 
        if ($tasks->num_rows > 0) {
            // output data of each row
            while($row = $tasks->fetch_assoc()) {
            echo "<div class='task-row'>" . $row["description"] . "</div>";
            }
        } else {
            echo "0 tasks";
        }
    ?>
</div>