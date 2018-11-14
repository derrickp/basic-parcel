import Person from "../models/person";

describe("initializing", () => {
  const params = {
    name: "name_value",
    email: "email_value"
  };
  const instance = new Person(params);

  test("sets name instance variable", () => {
    expect(instance.name).toEqual(params.name);
  });

  test("sets email instance variable", () => {
    expect(instance.email).toEqual(params.email);
  });
});
