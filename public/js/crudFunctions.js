async function createTask(ev) {
  ev.preventDefault();
  const { description, title } = ev.target;

  
  if (description.value.length > 0 && title.value.length > 0) {
    const formData = new FormData(ev.target);

    try {
      const response = await fetch("todos.php", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      console.log(json);
    } catch ({ message }) {
      console.error("error creating task", message);
    }
  } else {
    console.error("Campo vacio");
  }
}

export { createTask };
