import TodoList from "./ajax.js";
import isValidDataForm from "./formValidation.js";
import alertToggler from "./alertToggler.js";

const btn_buttons = document.querySelectorAll(".task-status-toggler");

btn_buttons.forEach((btn) =>
  btn.addEventListener("click", changeTaskStatus, false)
);

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

async function changeTaskStatus(ev) {
  ev.preventDefault();
  const id = ev.target.parentNode.getAttribute("data-id");
  const completed = this.getAttribute("data-completed") === "1" ? "0" : "1";

  await TodoList.changeStatus({
    id,
    completed,
  });
  location.reload();
}

export { createTask };
