const alerta = document.getElementById("alerta");

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
      const created = await response.json();
      if(created.ok === true){
        window.location.reload();
      }else{
        alert("Sorry, the task is not created");
      }
    } catch ({ message }) {
      console.error("error creating task", message);
    }
  } else {
    console.error("Campo vacio");
    alerta.classList.remove("alert-hidden");
    alerta.classList.add("alert-visible");
  }
}

export { createTask };
