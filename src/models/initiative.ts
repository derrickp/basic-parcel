import Person from "./person";

export interface InitiativeInput {
  title: string;
  dueDate: string;
  timeline: string;
  status: string;
  owners: Person[];
  id: string;
}

export default class Initiative {
  title: string;
  dueDate: string;
  timeline: string;
  status: string;
  owners: Person[];
  id: string;

  constructor({
    title = "",
    dueDate = "",
    timeline = "",
    status = "",
    owners = [],
    id = ""
  }: InitiativeInput) {
    this.title = title;
    this.dueDate = dueDate;
    this.timeline = timeline;
    this.status = status;
    this.owners = owners;
    this.id = id;
  }
}
