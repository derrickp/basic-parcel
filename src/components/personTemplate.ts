import Person from "../models/person";

export default function personTemplate(person: Person) {
  const element = document.createElement("a");
  element.appendChild(document.createTextNode(person.name));
  element.title = person.name;
  element.href = `mailto:${person.email}`;
  return element;
}
