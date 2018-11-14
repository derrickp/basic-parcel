import Initiative from "../models/initiative";
import makePersons from "./makePersons";

function parse(record: any) {
  return {
    title: record.fields["Initiative Name"],
    dueDate: record.fields["Initiative Due Date"],
    status: record.fields["Initiative Status"],
    timeline: record.fields.Timeline,
    owners: makePersons(record.fields["Product manager"]),
    id: record.id
  };
}

export default function makeInitiatives(records: any[]): Initiative[] {
  if (!records) {
    return [];
  }
  return records.map(record => new Initiative(parse(record)));
}
