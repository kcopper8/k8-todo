import { DayTodo, NoteId } from "../../type";
import { createNote, getNote, getNotes, updateNote } from "../client";
import { DAY_TODO_FOLDER_ID } from "../constants";
import { parseDayTodoBody, serializeDayTodoBody } from "./dayTodoDataHelper";

/**
 * 특정 날의 Todo (Day Todo) 를 저장한다.
 * @param dayTodo
 */
export const saveDayTodo = async (dayTodo: DayTodo) => {
  const body = serializeDayTodoBody(dayTodo);

  await updateNote(dayTodo.id, {
    title: dayTodo.title,
    body,
  });
};

export const createDayTodo = async (
  dayTodo: Omit<DayTodo, "id">
): Promise<{ id: NoteId; title: string }> => {
  const body = serializeDayTodoBody(dayTodo);

  const addedNote = await createNote({
    title: dayTodo.title,
    body: body,
    parent_id: DAY_TODO_FOLDER_ID,
    is_todo: 1,
  });

  return addedNote;
};

export const findDayTodoId = async (
  dayTodoTitle: string
): Promise<NoteId | undefined> => {
  const notes = await getNotes({
    parent_id: DAY_TODO_FOLDER_ID,
  });

  return notes.find((note) => note.title === dayTodoTitle)?.id;
};

/**
 * 특정 날의 Todo (Day Todo) 얻어오기
 * @param id
 */
export const getDayTodo = async (id: NoteId): Promise<DayTodo> => {
  const { title, todo_completed, body } = await getNote(id);

  const { dailyTodos, todos, totalPoint } = parseDayTodoBody(body);

  return {
    id,
    title,
    completed: todo_completed > 0,
    dailyTodos,
    todos,
    totalPoint,
  };
};
