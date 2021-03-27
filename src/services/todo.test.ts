import { refreshDayTodo } from "./todo";
import { getAllDailyTodos } from "./todoStorage/DailyTodo/dailyTodoDataService";
import {
  findDayTodoId,
  getDayTodo,
  saveDayTodo,
} from "./todoStorage/DayTodo/dayTodoDataService";
import { getOneTimeTodos } from "./todoStorage/OneTimeTodo/oneTimeTodoDataService";

jest.mock("./todoStorage/OneTimeTodo/oneTimeTodoDataService");
jest.mock("./todoStorage/DayTodo/dayTodoDataService");
jest.mock("./todoStorage/DailyTodo/dailyTodoDataService");

describe("refreshDayTodo", () => {
  const mockedFindDayTodoId = findDayTodoId as jest.MockedFunction<
    typeof findDayTodoId
  >;
  const mockedGetDayTodo = getDayTodo as jest.MockedFunction<typeof getDayTodo>;
  const mockedGetOneTimeTodos = getOneTimeTodos as jest.MockedFunction<
    typeof getOneTimeTodos
  >;
  const mockedGetAllDailyTodos = getAllDailyTodos as jest.MockedFunction<
    typeof getAllDailyTodos
  >;

  beforeEach(() => {
    mockedFindDayTodoId.mockResolvedValue("1");
  });
  describe("when two oneTimeTodo set is different", () => {
    beforeEach(() => {
      mockedGetAllDailyTodos.mockResolvedValue([]);
      mockedGetOneTimeTodos.mockResolvedValue([
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

      mockedGetDayTodo.mockResolvedValue({
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
    it("merges two sets", async () => {
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

  describe("when two dailyTodo set is different", () => {
    beforeEach(() => {
      mockedGetOneTimeTodos.mockResolvedValue([]);
    });

    describe("and dailyTodo has no subtask", () => {
      beforeEach(() => {
        mockedGetAllDailyTodos.mockResolvedValue([
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

        mockedGetDayTodo.mockResolvedValue({
          id: "",
          title: "",
          completed: false,
          todos: [],
          dailyTodos: [
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
        });
      });

      it("merges to sets", async () => {
        await refreshDayTodo("2020-03-27");

        expect(saveDayTodo).toBeCalledWith(
          expect.objectContaining({
            dailyTodos: [
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

    describe("and dailyTodo and dayTodo.dailyTodo has subtask at same todo", () => {
      beforeEach(() => {
        mockedGetAllDailyTodos.mockResolvedValue([
          {
            id: "2",
            title: "t2",
            completed: false,
            etc: "",
            tasks: [
              {
                title: "task both",
                completed: false,
              },
              {
                title: "task both, completed",
                completed: false,
              },
              {
                title: "task added",
                completed: false,
              },
            ],
          },
        ]);

        mockedGetDayTodo.mockResolvedValue({
          id: "",
          title: "",
          completed: false,
          todos: [],
          dailyTodos: [
            {
              id: "2",
              title: "t2",
              completed: true,
              etc: "",
              tasks: [
                {
                  title: "task removed",
                  completed: false,
                },
                {
                  title: "task both, completed",
                  completed: true,
                },
                {
                  title: "task both",
                  completed: false,
                },
              ],
            },
          ],
        });
      });

      it("merges two subtasks", async () => {
        await refreshDayTodo("2020-03-27");

        expect(saveDayTodo).toBeCalledWith(
          expect.objectContaining({
            dailyTodos: [
              expect.objectContaining({
                tasks: expect.arrayContaining([
                  {
                    title: "task added",
                    completed: false,
                  },
                  {
                    title: "task both",
                    completed: false,
                  },
                  {
                    title: "task both, completed",
                    completed: true,
                  },
                  {
                    title: "task removed",
                    completed: true,
                  },
                ]),
              }),
            ],
          })
        );
      });
    });
  });
});
