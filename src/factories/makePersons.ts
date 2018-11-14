import Person from "../models/person";

function parse(record: any) {
  return {
    name: record.name,
    email: record.email
  };
}

export default function makePersons(records: any[]) {
  if (!records) {
    return [];
  }
  return records.map(record => new Person(parse(record)));
}
