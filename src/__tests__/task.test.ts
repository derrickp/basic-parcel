import Task, { TaskInput } from "../models/task";

describe("initializing", () => {
  const params = {
    title: "title value",
    owners: [],
    dueDate: "due date value",
    status: "status value",
    timeline: "timeline value",
    priority: "priority value",
    initiative: "initiative value",
    country: "country value"
  };
  const instance = new Task(params);

  test("sets title instance variable", () => {
    expect(instance.title).toEqual(params.title);
  });

  test("sets owners instance variable", () => {
    expect(instance.owners).toEqual(params.owners);
  });

  test("sets due date instance variable", () => {
    expect(instance.dueDate).toEqual(params.dueDate);
  });

  test("sets status instance variable", () => {
    expect(instance.status).toEqual(params.status);
  });

  test("sets timeline instance variable", () => {
    expect(instance.timeline).toEqual(params.timeline);
  });

  test("sets priority instance variable", () => {
    expect(instance.priority).toEqual(params.priority);
  });

  test("sets country instance variable", () => {
    expect(instance.country).toEqual(params.country);
  });

  test("sets initiative instance variable", () => {
    expect(instance.initiative).toEqual(params.initiative);
  });
});

describe("initializing with undefined parameters", () => {
  const task = new Task(({ title: "title" } as unknown) as TaskInput);

  test("creates task with default due date", () => {
    expect(task.dueDate).toEqual("");
  });

  test("creates task with default status", () => {
    expect(task.status).toEqual("");
  });

  test("creates task with default priority", () => {
    expect(task.priority).toEqual("");
  });

  test("creates task with default timeline", () => {
    expect(task.timeline).toEqual("");
  });

  test("creates task with default owners", () => {
    expect(task.owners).toEqual([]);
  });

  test("creates task with default initiative", () => {
    expect(task.initiative).toEqual("");
  });

  test("creates task with default country", () => {
    expect(task.country).toEqual("");
  });
});
