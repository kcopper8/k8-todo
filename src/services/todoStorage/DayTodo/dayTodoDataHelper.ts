import { DayTodo, Todo } from "../../type";
import { DAY_POINT_NOTE_ID } from "../constants";
import {
  makeContentFromTitleAndBody,
  makeNoteLink,
  makeTodo,
  parseLink,
  parseTaskLine,
} from "../markupHelper";

const serializeDayTodoFragment = (
  title: DayTodo["title"],
  todos: DayTodo["todos"] | DayTodo["dailyTodos"]
): string => {
  if (todos.length === 0) {
    return "";
  }

  const body = todos
    .map((todo) => {
      const firstLine = makeTodo({
        title: makeNoteLink(todo),
        completed: todo.completed,
      });

      return [
        firstLine,
        ...todo.tasks.map((task) => {
          return "\t" + makeTodo(task);
        }),
      ].join("\n");
    })
    .join("\n");

  return makeContentFromTitleAndBody({
    title,
    body: body,
  }).trim();
};

const serializeDayTodoFooter = (totalPoint?: number): string => {
  const base = `- ${makeNoteLink({
    title: "할일 점수",
    id: DAY_POINT_NOTE_ID,
  })} : `;

  return base + (totalPoint ? totalPoint : "");
};

export const serializeDayTodoBody = ({
  todos,
  dailyTodos,
  totalPoint,
}: Pick<DayTodo, "todos" | "dailyTodos" | "totalPoint">): string => {
  const todoFragment = serializeDayTodoFragment("Todo", todos);
  const dailyTodoFragment = serializeDayTodoFragment("Daily", dailyTodos);
  const footer = serializeDayTodoFooter(totalPoint);

  return (
    [todoFragment, dailyTodoFragment + "\n", footer]
      .filter((item) => item.trim())
      .join("\n\n---\n") + "\n"
  );
};

export const parseDayTodoTodoFragment = (todoFragment?: string): Todo[] => {
  if (!todoFragment) {
    return [];
  }
  return todoFragment
    .replace("## Todo", "")
    .trim()
    .split("\n")
    .map((todoLine) => {
      const { completed, title: taskTitle } = parseTaskLine(todoLine.trim());
      const { id, title } = parseLink(taskTitle);

      return {
        title,
        completed,
        id,
        etc: "",
        tasks: [],
      };
    });
};

export const parseDayTodoDailTodoFragment = (
  dailyTodoFragment?: string
): Todo[] => {
  if (!dailyTodoFragment) {
    return [];
  }

  const dailyTodoLines = dailyTodoFragment
    .replace("## Daily", "")
    .trim()
    .split("\n");

  const ret: Todo[] = [];
  let previousTodo: Todo;

  dailyTodoLines.forEach((line) => {
    if (line.startsWith("\t")) {
      // subtask
      if (previousTodo) {
        previousTodo.tasks.push(parseTaskLine(line.trim()));
      }
    } else {
      const { completed, title: taskTitle } = parseTaskLine(line.trim());
      const { id, title } = parseLink(taskTitle);

      previousTodo = {
        title,
        completed,
        id,
        etc: "",
        tasks: [],
      };
      ret.push(previousTodo);
    }
  });
  return ret;
};

export const extractTotalPointFromMetaFragment = (
  metaFragment: string
): number | undefined => {
  // https://regexr.com/5l2bv
  const execResult = /^- \[.+\]\(.+\) : (\d+)$/.exec(metaFragment.trim());
  if (execResult && execResult[1]) {
    const ret = Number(execResult[1]);
    if (ret) {
      return ret;
    }
  }

  return undefined;
};

export const parseDayTodoBody = (
  dayTodoBody: string
): { todos: Todo[]; dailyTodos: Todo[]; totalPoint?: number } => {
  const splitedBody = dayTodoBody.split("---");
  let todoFragment = splitedBody.find((frag) => frag.includes("## Todo"));

  let todos: Todo[] = parseDayTodoTodoFragment(todoFragment);

  let dailyTodoFragment = splitedBody.find((frag) => frag.includes("## Daily"));
  let dailyTodos: Todo[] = parseDayTodoDailTodoFragment(dailyTodoFragment);

  const metaFragment = splitedBody[splitedBody.length - 1];

  return {
    todos,
    dailyTodos,
    totalPoint: extractTotalPointFromMetaFragment(metaFragment),
  };
};
