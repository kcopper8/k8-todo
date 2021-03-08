import { updateNote } from "../client";
import { serializeDayTodoBody } from "./dayTodoDataHelper";
import { saveDayTodo } from "./dayTodoDataService";

jest.mock("../client");
jest.mock("./dayTodoDataHelper");

describe("saveDailyTodo", () => {
  beforeEach(() => {
    (serializeDayTodoBody as any).mockReturnValue("eeee");
  });

  it("should", async () => {
    await saveDayTodo({
      completed: false,
      id: "1",
      title: "title",
      dailyTodos: [],
      todos: [],
      totalPoint: 2,
    });

    expect(updateNote).toHaveBeenCalledWith("1", {
      title: "title",
      body: "eeee",
    });
  });
});
