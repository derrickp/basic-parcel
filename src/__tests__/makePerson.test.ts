import makePersons from "../factories/makePersons";
import Person from "../models/person";

describe("given list of persons", () => {
  const persons = [
    {
      id: "1",
      email: "peachie@juul.com",
      name: "Princess Peach"
    }
  ];
  const result = makePersons(persons);

  test("returns list of equal length", () => {
    expect(result.length).toEqual(1);
  });

  test("returns list of Persons", () => {
    expect(result[0]).toBeInstanceOf(Person);
  });
});

describe("given undefined input", () => {
  test("returns empty list", () => {
    expect(makePersons((undefined as unknown) as any[])).toEqual([]);
  });
});
