import makeTasks from "../factories/makeTasks";
import Task from "../models/task";

describe("given list of tasks", () => {
  const tasks = [
    {
      id: "4",
      fields: {
        "Epic / Daily Task Name": "Talent Show",
        "Epic Status": "9 - Pending QA",
        Priority: "4 - High",
        Country: ["IL"],
        "Epic Due Date": "2018-09-30",
        "Initiative Name": ["Initiative Name 1"],
        Timeline: "September 2018",
        "Initiative PM": [
          {
            id: "2",
            email: "egg-man@juul.com",
            name: "Yoshi"
          }
        ]
      },
      createdTime: "2018-09-19T00:54:56.000Z"
    }
  ];
  const result = makeTasks(tasks);

  test("returns list of equal length", () => {
    expect(result.length).toEqual(1);
  });

  test("returns list of Tasks", () => {
    result.forEach(item => expect(item).toBeInstanceOf(Task));
  });
});

describe("given undefined input", () => {
  test("returns empty list", () => {
    expect(makeTasks((undefined as unknown) as any[])).toEqual([]);
  });
});
