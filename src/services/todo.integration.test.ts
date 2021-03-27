import { DateTime } from "luxon";
import {
  getDayTodo,
  setCompleteOfOneTimeTodo,
  setDailyTodoSubTaskCompleted,
  setDailyTodoTaskCompleted,
} from "./todo";
import { findTodo } from "./todoHelper";

const testDate = DateTime.local().toISODate();

xdescribe("integration", () => {
  describe("OneTimeTodo", () => {
    it("comeplete oneTimeTodo and roll back", async () => {
      const dayTodo = await getDayTodo(testDate);

      const todoToTest = dayTodo.todos.find((todo) => !todo.completed);
      if (!todoToTest) {
        throw new Error("no todo to test");
      }

      await setCompleteOfOneTimeTodo(testDate, todoToTest.id, true);

      const dayTodoForCompletedTrue = await getDayTodo(testDate);
      const expectForCompletedTrue = dayTodoForCompletedTrue.todos.find(
        (todo) => todo.id === todoToTest.id
      );

      expect(expectForCompletedTrue).toEqual({
        ...todoToTest,
        completed: true,
      });

      await setCompleteOfOneTimeTodo(testDate, todoToTest.id, false);

      const dayTodoForCompletedFalse = await getDayTodo(testDate);
      const expectForCompletedFalse = dayTodoForCompletedFalse.todos.find(
        (todo) => todo.id === todoToTest.id
      );

      expect(expectForCompletedFalse).toEqual({
        ...todoToTest,
      });
    });
  });

  describe("dailySingleTaskTodo", () => {
    it("complete dailySingleTaskTodo and roll back", async () => {
      const initialDayTodo = await getDayTodo(testDate);
      const dailyTodoForTest = initialDayTodo.dailyTodos.find(
        (dailyTodo) => !dailyTodo.completed && dailyTodo.tasks.length === 0
      );

      if (!dailyTodoForTest) {
        throw new Error("no dailyTodo for test");
      }

      await setDailyTodoTaskCompleted(testDate, dailyTodoForTest.id, true);

      const todo = findTodo(await getDayTodo(testDate), dailyTodoForTest.id);

      expect(todo).toEqual({
        ...dailyTodoForTest,
        completed: true,
      });

      await setDailyTodoTaskCompleted(testDate, dailyTodoForTest.id, false);

      expect(findTodo(await getDayTodo(testDate), dailyTodoForTest.id)).toEqual(
        {
          ...dailyTodoForTest,
        }
      );
    });
  });

  describe("dailyMultipleTaskTodo", () => {
    it("complete subtask of dailyTodoTask and roll back", async () => {
      const initialDayTodo = await getDayTodo(testDate);
      const dailyTodoForTest = initialDayTodo.dailyTodos.find(
        (dailyTodo) => !dailyTodo.completed && dailyTodo.tasks.length > 0
      );

      if (!dailyTodoForTest) {
        throw new Error("no dailyTodo for test");
      }

      const subTask = dailyTodoForTest.tasks.find(
        (subtask) => !subtask.completed
      );
      if (!subTask) {
        throw new Error("no subtask for test");
      }

      await setDailyTodoSubTaskCompleted(
        testDate,
        dailyTodoForTest.id,
        subTask.title,
        true
      );

      expect(findTodo(await getDayTodo(testDate), dailyTodoForTest.id)).toEqual(
        {
          ...dailyTodoForTest,
          completed: true,
          tasks: dailyTodoForTest.tasks.map((subTaskItem) => {
            if (subTaskItem.title === subTask.title) {
              return {
                ...subTask,
                completed: true,
              };
            }
            return subTaskItem;
          }),
        }
      );

      await setDailyTodoSubTaskCompleted(
        testDate,
        dailyTodoForTest.id,
        subTask.title,
        false
      );

      expect(findTodo(await getDayTodo(testDate), dailyTodoForTest.id)).toEqual(
        {
          ...dailyTodoForTest,
        }
      );
    });
  });
});
