<?php
    function renderTask($task){
        $id = $task["id"];
        $estado = $task["completed"];
        $titulo = $task["title"];
        $descripcion = $task["description"];
        $fecha = $task["fecha"];

    ?>
        <div class='col-lg-6 col-xs-12 px-2 my-1 mb-4'>
            <div class="task">
                <div class="task-options">
                    <i class="fa fa-ellipsis-v" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                    <div class="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton">
                        <span class="dropdown-item deleteBtn" href="#" data-id="<?php echo $id?>">
                            <small>
                                <i class="fa fa-trash mr-2"></i> Borrar tarea
                            </small>
                        </span>
                        <span class="task-status-toggler dropdown-item" 
                            data-id="<?php echo $id?>" 
                            data-completed="<?php echo $estado?>">
                            <small>
                                <i class="fa fa-cogs mr-2"></i>
                                Marcar como <?php echo $estado ? "incompleta" : "completada" ?>
                            </small>
                        </span>
                    </div>
                </div>
                <div class="<?php echo $estado ? 'task-not-available' : '' ?>">
                    

                    <div class="row">
                        <div class="col-12">
                            <h6 class="task-title text-left">
                                <?php echo $titulo;?>
                            </h6>
                            <p class="task-description m-0 mt-3">
                                <?php echo $descripcion;?>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="task-details">
                    <small class="task-detail task-<?php echo $estado ? "complete" : "incomplete" ?>">
                        <i class="fa fa-<?php echo $estado ? "check" : "times" ?> mr-2"></i>
                        <?php echo $estado ? "Completada" : "Incompleta" ?>
                    </small>
                    <small class="task-detail">
                        <i class="fa fa-clock mr-2"></i>
                        <?php echo $fecha;?>
                    </small>
                </div>
            </div>
        </div>
    <?php
    }
?>