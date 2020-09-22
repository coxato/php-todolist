<?php 
    $tasks = $db->query("SELECT * FROM task");
?>

<h3 class="tasks mt-5 mb-4">Your task</h3>
<main class="row tasks-container">
    <?php 
        if ($tasks->num_rows > 0): 
        // output data of each row
            while($row = $tasks->fetch_assoc()):
    ?>
                <div class='col-xm-12 col-6 px-2 my-3'>
                    <div class="task">
                        <div class="row">
                            <div class="col-6">
                                <h6 class="task-title">
                                    <?php echo($row["description"]);?>
                                </h6>
                            </div>
                            <div class="col-6 pr-0">
                                <img src="public/task.svg" alt="An task" class="task-item">
                            </div>
                        </div>
                    </div>
                </div>
                
        <?php
            endwhile;
        else:
        ?>
            0 tasks
        <?php endif;?>
</main>


