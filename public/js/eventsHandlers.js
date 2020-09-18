import {
    createTask
} from './crudFunctions.js';

// form submit handler
function handleFormSubmit(){
    const form = document.getElementById('taskForm');
    form.addEventListener('submit', createTask);
}

function initHandlers(){
    handleFormSubmit();
}


export default initHandlers;