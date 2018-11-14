import InitiativeRepository from "../models/initiativeRepository";

describe("an initiative repository", () => {
  const mockTransform = jest.fn();
  const repository = new InitiativeRepository("url", mockTransform);

  describe("readAll method", () => {
    test("calls the injected initiative transform", async () => {
      await repository.readAll();
      expect(mockTransform).toHaveBeenCalled();
    });
  });
});
