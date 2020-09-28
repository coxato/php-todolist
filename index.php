<?php
    include_once 'todos.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <?php include_once 'public/header.php';?>
</head>
<body>
    <?php include_once 'components/loader.php';?>
    <div class="task-container">
        <!-- form -->
        <?php
            include_once "checkParams.php";
            if(checkQuerySearch()){
                include 'components/taskListSearch.php';
            }else{
                include 'components/taskForm.php';
                include 'components/taskList.php';
            }
        ?>
    </div>
    
    <?php include_once 'public/footer.php' ?>
    <?php include_once 'public/scripts.php' ?>
</body>
</html>