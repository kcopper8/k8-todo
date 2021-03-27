import { refreshDayTodo } from "./todo";
import {
  findDayTodoId,
  getDayTodo,
  saveDayTodo,
} from "./todoStorage/DayTodo/dayTodoDataService";
import { getOneTimeTodos } from "./todoStorage/OneTimeTodo/oneTimeTodoDataService";

jest.mock("./todoStorage/OneTimeTodo/oneTimeTodoDataService");
jest.mock("./todoStorage/DayTodo/dayTodoDataService");

describe("refreshDayTodo", () => {
  beforeEach(() => {
    (findDayTodoId as jest.MockedFunction<
      typeof findDayTodoId
    >).mockResolvedValue("1");
    (getOneTimeTodos as jest.MockedFunction<
      typeof getOneTimeTodos
    >).mockResolvedValue([
      {
        id: "1",
        completed: false,
        etc: "",
        tasks: [],
        title: "t1",
      },
      {
        id: "2",
        title: "t2",
        completed: false,
        etc: "",
        tasks: [],
      },
    ]);

    (getDayTodo as jest.MockedFunction<typeof getDayTodo>).mockResolvedValue({
      id: "",
      title: "",
      completed: false,
      todos: [
        {
          id: "2",
          title: "t2",
          completed: true,
          etc: "",
          tasks: [],
        },
        {
          id: "3",
          title: "t3",
          completed: false,
          etc: "",
          tasks: [],
        },
      ],
      dailyTodos: [],
    });
  });
  it("merges two todos", async () => {
    await refreshDayTodo("2020-03-27");

    expect(saveDayTodo).toBeCalledWith(
      expect.objectContaining({
        todos: [
          {
            id: "1",
            completed: false,
            etc: "",
            tasks: [],
            title: "t1",
          },
          {
            id: "2",
            title: "t2",
            completed: true,
            etc: "",
            tasks: [],
          },
          {
            id: "3",
            title: "t3",
            completed: true,
            etc: "",
            tasks: [],
          },
        ],
      })
    );
  });
});
