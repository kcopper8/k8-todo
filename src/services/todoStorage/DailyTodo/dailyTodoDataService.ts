import { DailyTodo } from "../../type";
import { getNotes } from "../client";
import { DAILY_TODO_STORE_FOLDER_ID } from "../constants";
import { parseDailyTodoBody } from "./dailyTodoDataHelper";

export const getAllDailyTodos = async (): Promise<DailyTodo[]> => {
  const rawDailyTodos = await getNotes({
    parent_id: DAILY_TODO_STORE_FOLDER_ID,
    is_completed: false,
    is_todo: true,
  });

  return rawDailyTodos.map(({ id, title, todo_completed, body }) => ({
    id,
    title,
    completed: todo_completed > 0,
    ...parseDailyTodoBody(body),
  }));
};
