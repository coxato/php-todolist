import { 
  createTask, 
  deleteTask, 
  changeTaskStatus 
} from "./crudFunctions.js";

// form submit handler
function handleFormSubmit() {
  const form = document.getElementById("myform");
  form && form.addEventListener("submit", createTask);
}


// delete task handler
function handleDeleteTask() {
  const deleteButtons = [...document.querySelectorAll('.deleteBtn')];
  
  if(deleteButtons.length){
    deleteButtons.forEach( btn => {
      // obtener el id para evitar clickar en el target incorrecto
      const id = btn.getAttribute("data-id");
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTask(id)
      });
    }) 
  }
}


// change completed status
function handleChangeStatus() {
  const btn_buttons = document.querySelectorAll(".task-status-toggler");

  if(btn_buttons.length){
    btn_buttons.forEach((btn) =>{
      // get element data, para evitar clickar en el target incorrecto
      const id = btn.getAttribute("data-id");
      const completed = btn.getAttribute("data-completed");
      btn.addEventListener("click", () => changeTaskStatus(id, completed), false);
    }
    );
  }
}

function initHandlers() {
  handleFormSubmit();
  handleDeleteTask();
  handleChangeStatus();
}

export default initHandlers;
