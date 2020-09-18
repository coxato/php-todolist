import ajax from './ajax.js';

async function createTask(ev) {
    ev.preventDefault();
    const { value } = ev.target;

    try {
        const response = await ajax.post('todos.php', {
            description: value,
            completed: false
        },
            {},
            false,
            'text'
        );
        console.log(response);
    } catch ({message}) {
        console.error("error creating task", message);
    }
}

export {
    createTask
}