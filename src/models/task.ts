import Person from "./person";

export interface TaskInput {
  title: string;
  dueDate: string;
  timeline: string;
  status: string;
  priority: string;
  owners: Person[];
  country: string;
  initiative: string;
}

export default class Task {
  title: string;
  dueDate: string;
  timeline: string;
  status: string;
  priority: string;
  owners: Person[];
  country: string;
  initiative: string;

  constructor({
    title,
    dueDate = "",
    timeline = "",
    status = "",
    priority = "",
    owners = [],
    country = "",
    initiative = ""
  }: TaskInput) {
    this.title = title;
    this.dueDate = dueDate;
    this.timeline = timeline;
    this.priority = priority;
    this.status = status;
    this.owners = owners;
    this.country = country;
    this.initiative = initiative;
  }
}
