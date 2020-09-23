class Request {
  async send(url, data, method = "GET", isForm = false) {
    try {
      const xhr = await fetch(url, {
        method,
        body: isForm ? new FormData(data) : this.toFormData(data),
      });

      const response = await xhr.json();
      return response;
    } catch (error) {
      alert(error);
    }
  }

  toFormData(obj) {
    const values = Object.entries(obj);
    const formData = new FormData();
    for (const [key, value] of values) {
      formData.append(key, value);
    }
    return formData;
  }
}

class TodoList extends Request {
  async createTask(data) {
    try {
      const response = await this.send("todos.php", data, "POST", true);
      return response;
    } catch (error) {
      alert(error);
    }
  }
}

export default new TodoList();
