import TodoList from './ajax.mjs';

const alerta = document.getElementById("alerta");
const btn_buttons = document.querySelectorAll(".task-status-toggler");

btn_buttons.forEach((btn) =>
  btn.addEventListener("click", changeTaskStatus, false)
);

function isValidDataForm(form) {
  const { description, title } = form;
  return description.value.length > 0 && title.value.length > 0;
}

async function createTask(ev) {
  ev.preventDefault();
  if (isValidDataForm(ev.target)) {
    alerta.classList.remove("alert-visible");
    alerta.classList.add("alert-hidden");

    const formData = new FormData(ev.target);

    try {
      const response = await fetch("todos.php", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log(json);
      location.reload();
    } catch ({ message }) {
      console.error("error creating task", message);
    }
  } else {
    console.error("Campo vacio");
    alerta.classList.remove("alert-hidden");
    alerta.classList.add("alert-visible");
  }
}

async function changeTaskStatus(ev) {
  ev.preventDefault();
  const id = ev.target.parentNode.getAttribute("data-id");
  const completed = this.getAttribute("data-completed");
  console.log(completed);
  const formData = new FormData();
  formData.append("id", id);
  formData.append("completed", completed === "1" ? "0" : "1");
  try {
    const response = await fetch("todo-update-status.php", {
      method: "POST",
      body: formData,
    });
    const json = await response.json();
    console.log(json);
    location.reload();
  } catch ({ message }) {
    console.error("error creating task", message);
  }
}

export { createTask };
