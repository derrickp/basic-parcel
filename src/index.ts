import taskList from "./components/taskList";
import TaskRepository from "./models/taskRepository";
import makeTasks from "./factories/makeTasks";

const app = document.getElementById("app") as HTMLElement;

(async () => {
  const repo = new TaskRepository(makeTasks);
  const tasks = await repo.readAll();
  console.log(tasks);
  app.appendChild(taskList(tasks));
})();
