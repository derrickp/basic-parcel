import keyValue from "./keyValue";
import title from "./title";
import personListTemplate from "./personListTemplate";
import Task from "../models/task";

export default function task(object: Task) {
  const element = document.createElement("span");
  element.appendChild(title(object.title));
  element.appendChild(keyValue("Due Date", object.dueDate));
  element.appendChild(keyValue("Timeline", object.timeline));
  element.appendChild(keyValue("Priority", object.priority));
  element.appendChild(keyValue("Status", object.status));
  element.appendChild(keyValue("Initiative", object.initiative));
  element.appendChild(keyValue("Country", object.country));
  if (object.owners.length > 0) {
    element.appendChild(personListTemplate(object.owners));
  }
  return element;
}
