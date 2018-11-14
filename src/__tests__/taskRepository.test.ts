import TaskRepository from "../models/taskRepository";

describe("a task repository", () => {
  const mockTransform = jest.fn();
  const repository = new TaskRepository(mockTransform);

  describe("task method", () => {
    test("calls the injected task transform", async () => {
      await repository.readAll();
      expect(mockTransform).toHaveBeenCalled();
    });
  });
});
