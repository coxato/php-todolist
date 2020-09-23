<form method="post" id="myform">
    <img src="public/to-do-list.svg" alt="Todo list" class="logo">
    <div class="form-group">
        <label for="title" class="mb-3">
            <strong>
                Your task title:
            </strong>
        </label>
        <input 
            type="text" 
            class="mb-4 py-4 form-control" 
            name="title" 
            id="title"
            placeholder="Task title"
            minlength="1"
        >
    </div>
    <div class="form-group">
        <label for="description" class="mb-3">
            <strong>
                Your task description:
            </strong>
        </label>
        <textarea 
            class="form-control"
            name="description"
            placeholder="Task description" 
            id="description" 
            minlength="1"></textarea>
    </div>
    <button type="submit" class="btn btn-add">
        +
    </button>
</form>