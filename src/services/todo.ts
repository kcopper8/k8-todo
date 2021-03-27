import { DateTime } from "luxon";
import tableize from "../utils/tableize";
import { getAllDailyTodos } from "./todoStorage/DailyTodo/dailyTodoDataService";
import {
  createDayTodo,
  findDayTodoId,
  getDayTodo as getDayTodoDataService,
  saveDayTodo,
} from "./todoStorage/DayTodo/dayTodoDataService";
import { getOneTimeTodos } from "./todoStorage/OneTimeTodo/oneTimeTodoDataService";
import { DayTodo, NoteId, Todo, TodoDay } from "./type";

type DayTitle = string;

const toDayTitle = (dateTime: DateTime): DayTitle => dateTime.toISODate();

const ascStrProp = (prop: string) => {
  return (a: any, b: any): number =>
    a[prop] === b[prop] ? 0 : a[prop] < b[prop] ? -1 : 1;
};

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
  const dayTodo: DayTodo = {
    title: title,
    completed: false,
    todos: await getOneTimeTodos(),
    dailyTodos: await getAllDailyTodos(),
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

export const refreshDayTodo = async (todoDay: TodoDay): Promise<void> => {
  function combineOneTimeTodo(
    oneTimeTodo: Todo | undefined,
    todoInDayTodo: Todo | undefined
  ): Todo | undefined {
    if (!oneTimeTodo && todoInDayTodo) {
      // completed at other place
      return {
        ...todoInDayTodo,
        completed: true,
      };
    } else if (oneTimeTodo && !todoInDayTodo) {
      // new
      return {
        ...oneTimeTodo,
      };
    } else if (oneTimeTodo && todoInDayTodo) {
      return {
        ...todoInDayTodo,
      };
    } else {
      return undefined;
    }
  }

  const dayTodoId = await findDayTodoId(todoDay);
  if (!dayTodoId) {
    throw new Error("no dayTodo for todoDay");
  }

  const dayTodo = await getDayTodoDataService(dayTodoId);

  const oneTimeTodos = await getOneTimeTodos();

  const todoTable = tableize(oneTimeTodos, dayTodo.todos, ascStrProp("id"));

  const newTodos = todoTable
    .map(([oneTimeTodo, todoInDayTodo]) =>
      combineOneTimeTodo(oneTimeTodo, todoInDayTodo)
    )
    .filter((v) => v) as Todo[];

  const dailyTodos = await getAllDailyTodos();

  const dailyTodosTable = tableize(
    dailyTodos,
    dayTodo.dailyTodos,
    ascStrProp("id")
  );

  const newDailyTodos = dailyTodosTable
    .map(([dailyTodo, todoInDayTodo]) => {
      if (dailyTodo && todoInDayTodo) {
        if (dailyTodo.tasks.length > 0 || todoInDayTodo.tasks.length > 0) {
          const tasksTable = tableize(
            dailyTodo.tasks,
            todoInDayTodo.tasks,
            ascStrProp("title")
          );
          const newTasks = tasksTable
            .map(([taskInDailyTodo, taskInDayTodo]) => {
              if (taskInDailyTodo && taskInDayTodo) {
                return {
                  ...taskInDayTodo,
                };
              } else if (taskInDailyTodo) {
                return {
                  ...taskInDailyTodo,
                };
              } else if (taskInDayTodo) {
                return {
                  ...taskInDayTodo,
                  completed: true,
                };
              } else {
                return undefined;
              }
            })
            .filter((v) => v);

          return {
            ...todoInDayTodo,
            tasks: newTasks,
          };
        } else {
          return {
            ...todoInDayTodo,
          };
        }
      } else if (dailyTodo) {
        return {
          ...dailyTodo,
        };
      } else if (todoInDayTodo) {
        return {
          ...todoInDayTodo,
          completed: true,
        };
      } else {
        return undefined;
      }
    })
    .filter((v) => v) as Todo[];

  await updateDayTodo({
    ...dayTodo,
    todos: newTodos,
    dailyTodos: newDailyTodos,
  });
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
