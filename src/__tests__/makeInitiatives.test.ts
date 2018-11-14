import makeInitiatives from "../factories/makeInitiatives";
import Initiative from "../models/initiative";
import Person from "../models/person";

describe("given list of records", () => {
  const records = [
    {
      id: "2",
      fields: {
        "Initiative Name": "Strength Training",
        "Initiative Due Date": "2018-08-17",
        "Initiative Status": "Complete ",
        "Product manager": [
          {
            id: "1",
            email: "peachie@juul.com",
            name: "Princess Peach"
          }
        ],
        Timeline: "August 2018"
      },
      createdTime: "2018-08-09T17:34:28.000Z"
    }
  ];
  const result = makeInitiatives(records);

  test("returns list of equal length", () => {
    expect(result.length).toEqual(1);
  });

  test("returns list of Initiatives", () => {
    expect(result[0] instanceof Initiative).toEqual(true);
  });

  test("Initiatives in the list may contain Persons", () => {
    const isPerson = (obj: any) => obj instanceof Person;
    expect(result[0].owners.every(isPerson)).toEqual(true);
  });
});

describe("given undefined input", () => {
  test("returns empty list", () => {
    expect(makeInitiatives((undefined as unknown) as any[])).toEqual([]);
  });
});
