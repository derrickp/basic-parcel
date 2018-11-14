import task from "./task";
import Task from "../models/task";

export default function taskList(tasks: Task[]) {
  const taskElements = tasks.map(t => task(t));
  const list = document.createElement("ul");
  for (const element of taskElements) {
    list.appendChild(element);
  }
  return list;
}
