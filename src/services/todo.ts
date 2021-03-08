import { DateTime } from "luxon";
import { getNotes } from "./todoStorage/client";
import { ONE_TIME_TODO_FOLDER_ID } from "./todoStorage/constants";
import { getAllDailyTodos } from "./todoStorage/DailyTodo/dailyTodoDataService";
import {
  createDayTodo,
  findDayTodoId,
  getDayTodo as getDayTodoDataService,
  saveDayTodo,
} from "./todoStorage/DayTodo/dayTodoDataService";
import { DayTodo, isDailySingleTaskTodo, NoteId, TodoDay } from "./type";

type DayTitle = string;

const toDayTitle = (dateTime: DateTime): DayTitle => dateTime.toISODate();

const countOfDayPoint = (dayTodo: DayTodo): number => {
  const todoPoint = dayTodo.todos.filter((todo) => todo.completed).length;

  const dailyTodoPoint = dayTodo.dailyTodos.reduce(
    (previousPoint, dailyTodoInDayTodo) => {
      if (dailyTodoInDayTodo.tasks.length > 0) {
        return (
          previousPoint +
          dailyTodoInDayTodo.tasks.filter((task) => task.completed).length
        );
      } else {
        return dailyTodoInDayTodo.completed ? previousPoint + 1 : previousPoint;
      }
    },
    0
  );

  return todoPoint + dailyTodoPoint;
};

const updateDayTodo = async (dayTodo: DayTodo) => {
  const newPoint = countOfDayPoint(dayTodo);
  dayTodo.totalPoint = newPoint;

  await saveDayTodo(dayTodo);
};

const makeDayTodoObj = async (title: TodoDay) => {
  const todos = await getNotes({
    parent_id: ONE_TIME_TODO_FOLDER_ID,
    is_todo: true,
    is_completed: false,
  });

  const dailyTodos = await getAllDailyTodos();

  const dayTodo: DayTodo = {
    title: title,
    completed: false,
    todos: todos.map((todo) => ({
      id: todo.id,
      completed: todo.todo_completed > 0,
      etc: "",
      title: todo.title,
      tasks: [],
    })),
    dailyTodos: dailyTodos.map((todo) => ({
      id: todo.id,
      completed: false,
      etc: "",
      title: todo.title,
      tasks: isDailySingleTaskTodo(todo) ? [] : todo.template,
    })),
    id: "",
  };

  return dayTodo;
};

export const getDayTodo: (todoDay: TodoDay) => Promise<DayTodo> = async (
  todoDay
) => {
  let dayTodoId = await findDayTodoId(todoDay);

  if (!dayTodoId) {
    const dayTodo = await makeDayTodoObj(todoDay);

    const { id } = await createDayTodo(dayTodo);
    dayTodoId = id;
  }

  return await getDayTodoDataService(dayTodoId);
};

export const getSupportDays = (): string[] => {
  const maxDays = 5;
  const migratedDay = DateTime.local(2021, 3, 4);
  const days: string[] = [];

  let itemDay = DateTime.local();

  while (itemDay.diff(migratedDay, "days").days > 0 && days.length < maxDays) {
    days.push(toDayTitle(itemDay));

    itemDay = itemDay.minus({
      days: 1,
    });
  }

  return days;
};

export const setCompleteOfOneTimeTodo = async (
  todoDay: TodoDay,
  id: NoteId,
  completed: boolean
) => {
  const dayTodo = await getDayTodo(todoDay);

  const todo = dayTodo.todos?.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = completed;

    await updateDayTodo(dayTodo);
  }
};

export const setDailyTodoTaskCompleted = async (
  todoDay: TodoDay,
  dailyTodoId: NoteId,
  completed: boolean
) => {
  const dayTodo = await getDayTodo(todoDay);

  const thisDailyTodo = dayTodo.dailyTodos.find(
    (dailyTodo) => dailyTodo.id === dailyTodoId
  );

  if (!thisDailyTodo) {
    throw new Error(
      `no dailyTodo (${dailyTodoId}) in of DayTodo (${dayTodo.id}). may have to update dayTodo?`
    );
  }

  thisDailyTodo.completed = completed;

  await updateDayTodo(dayTodo);
};

export const setDailyTodoSubTaskCompleted = async (
  todoDay: TodoDay,
  dailyTodoId: NoteId,
  title: string,
  completed: boolean
) => {
  const dayTodo = await getDayTodo(todoDay);

  const thisDailyTodo = dayTodo.dailyTodos.find(
    (dailyTodo) => dailyTodo.id === dailyTodoId
  );

  if (!thisDailyTodo) {
    return;
  }

  const task = thisDailyTodo.tasks.find((task) => task.title === title);
  if (!task) {
    throw new Error(
      `no task in dayTask (daily: ${dailyTodoId}, dayTodo: ${dayTodo.id}). may have to update daily todo?`
    );
  }

  if (completed) {
    task.completed = true;
    thisDailyTodo.completed = true;

    await updateDayTodo(dayTodo);
  } else {
    task.completed = false;
    thisDailyTodo.completed = !!thisDailyTodo.tasks.find(
      (task) => task.completed
    );

    await updateDayTodo(dayTodo);
  }
};
