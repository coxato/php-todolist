import TodoList from "./ajax.js";
import isValidDataForm from "./formValidation.js";
import alertToggler from "./alertToggler.js";


async function createTask(ev) {
  ev.preventDefault();
  if (isValidDataForm(ev.target)) {
    alertToggler();
    await TodoList.createTask(ev.target);
    location.reload();
  } else {
    console.error("Campo vacio");
    alertToggler(false);
  }
}

async function changeTaskStatus(id, completed) {
  const isCompleted = completed === "1" ? "0" : "1";

  await TodoList.changeStatus({
    id,
    completed: isCompleted,
  });
  location.reload();
}

async function deleteTask(id) {
  await TodoList.deleteTask(id);
  location.reload();
}

export { createTask, deleteTask, changeTaskStatus };
