import ajax from './ajax.js';

async function createTask(ev) {
    ev.preventDefault();
    const { value } = ev.target;
    const formData = new FormData(ev.target);

    try {
        const response = await fetch("todos.php", {
            method: 'POST',
            body: formData
        })
        const json = await response.json();
        console.log(json);
    } catch ({message}) {
        console.error("error creating task", message);
    }
}

export {
    createTask
}