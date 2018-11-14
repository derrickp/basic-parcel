import tasks from "../data/tasks";
import Task from "./task";

export default class TaskRepository {
  taskTransform: (records: any) => Task[];

  constructor(taskTransform: (records: any) => Task[]) {
    this.taskTransform = taskTransform;
  }

  async readAll() {
    return Promise.resolve(this.taskTransform(tasks));
  }
}
