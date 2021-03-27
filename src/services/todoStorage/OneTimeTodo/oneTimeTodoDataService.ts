import { getNotes } from "../client";
import { ONE_TIME_TODO_FOLDER_ID } from "../constants";

export const getOneTimeTodos = async () => {
  const todos = await getNotes({
    parent_id: ONE_TIME_TODO_FOLDER_ID,
    is_todo: true,
    is_completed: false,
  });

  return todos.map((todo) => ({
    id: todo.id,
    completed: todo.todo_completed > 0,
    etc: "",
    title: todo.title,
    tasks: [],
  }));
};
