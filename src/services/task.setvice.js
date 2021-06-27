class TaskService {
  apiUrl = "http://localhost:3000";

  async getAllTasks() {
    return fetch(`${this.apiUrl}/tasks`).then((tasks) => tasks.json());
  }

  async createTask(task) {
    console.log({ task });
    return fetch(`${this.apiUrl}/tasks`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    }).then((task) => task.json());
  }
}

export default new TaskService();
