import Initiative, { InitiativeInput } from "../models/initiative";

describe("initializing with defined parameters", () => {
  const params = {
    title: "title value",
    owners: [],
    dueDate: "due date value",
    status: "status value",
    timeline: "timeline value",
    id: "id value"
  };
  const initiative = new Initiative(params);

  test("sets title instance variable", () => {
    expect(initiative.title).toEqual(params.title);
  });

  test("sets owners instance variable", () => {
    expect(initiative.owners).toEqual(params.owners);
  });

  test("sets due date instance variable", () => {
    expect(initiative.dueDate).toEqual(params.dueDate);
  });

  test("sets status instance variable", () => {
    expect(initiative.status).toEqual(params.status);
  });

  test("sets timeline instance variable", () => {
    expect(initiative.timeline).toEqual(params.timeline);
  });

  test("sets id instance variable", () => {
    expect(initiative.id).toEqual(params.id);
  });
});

describe("initializing with undefined parameters", () => {
  const initiative = new Initiative(({
    title: undefined
  } as unknown) as InitiativeInput);

  test("creates initiative with default title", () => {
    expect(initiative.title).toEqual("");
  });

  test("creates initiative with default due date", () => {
    expect(initiative.dueDate).toEqual("");
  });

  test("creates initiative with default status", () => {
    expect(initiative.status).toEqual("");
  });

  test("creates initiative with default timeline", () => {
    expect(initiative.timeline).toEqual("");
  });

  test("creates initiative with default owners", () => {
    expect(initiative.owners).toEqual([]);
  });

  test("creates initiative with default id", () => {
    expect(initiative.id).toEqual("");
  });
});
