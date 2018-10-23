import { Thing } from "../Thing";

describe("Thing", () => {
  it("sets foobar to true", () => {
    const thing = new Thing();
    expect(thing.foobar).toEqual(true);
  });
});
