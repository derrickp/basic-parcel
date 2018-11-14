import personTemplate from "./personTemplate";
import Person from "../models/person";

function personListItemTemplate(person: Person) {
  const li = document.createElement("li");
  li.appendChild(personTemplate(person));
  return li;
}

export default function personListTemplate(persons: Person[]) {
  const list = document.createElement("ul");
  persons.forEach(person => {
    list.appendChild(personListItemTemplate(person));
  });
  return list;
}
