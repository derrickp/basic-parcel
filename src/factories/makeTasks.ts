import Task from "../models/task";
import makePersons from "./makePersons";

function parse(record: any) {
  return {
    title: record["Epic / Daily Task Name"],
    status: record["Epic Status"],
    priority: record.Priority,
    country: record.Country,
    dueDate: record["Epic Due Date"],
    initiative: record["Initiative Name"],
    timeline: record.Timeline,
    owners: makePersons(record["Initiative PM"])
  };
}

export default function makeTasks(records: any[]): Task[] {
  if (!records) {
    return [];
  }
  return records.map(record => new Task(parse(record.fields)));
}
