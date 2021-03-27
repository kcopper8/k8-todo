import { isDailySingleTaskTodo, Todo } from "../../type";
import { getNotes } from "../client";
import { DAILY_TODO_STORE_FOLDER_ID } from "../constants";
import { parseDailyTodoBody } from "./dailyTodoDataHelper";

export const getAllDailyTodos = async (): Promise<Todo[]> => {
  const rawDailyTodos = await getNotes({
    parent_id: DAILY_TODO_STORE_FOLDER_ID,
    is_completed: false,
    is_todo: true,
  });

  return rawDailyTodos
    .map(({ id, title, todo_completed, body }) => ({
      id,
      title,
      completed: todo_completed > 0,
      ...parseDailyTodoBody(body),
    }))
    .map((dailyTodo) => ({
      id: dailyTodo.id,
      completed: false,
      etc: "",
      title: dailyTodo.title,
      tasks: isDailySingleTaskTodo(dailyTodo) ? [] : dailyTodo.template,
    }));
};
