import { DayTodo, NoteId } from "./type";

export const findTodo = (dayTodo: DayTodo, todoId: NoteId) => {
  const todo = dayTodo.todos.find((todo) => todo.id === todoId);
  if (todo) {
    return todo;
  }

  return dayTodo.dailyTodos.find((todo) => todo.id === todoId);
};
