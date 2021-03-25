import { DailySingleTask, DayTask, NoteLink, Task } from "../../type";
import {
  checkTodoIsMultiTask,
  contentIsTemplate,
  isTitleLine,
  parseLink,
  parseTaskLine,
} from "../markupHelper";

export const parseDailyTodoBody = (
  body: string
): { dayTasks: DayTask[]; template: Task[] } | { tasks: DailySingleTask[] } => {
  const isMultiTask = checkTodoIsMultiTask(body);
  if (isMultiTask) {
    return {
      ...parseDailyMultipleTasksDayTask(body),
    };
  } else {
    return {
      tasks: parseDailySingleTasks(body),
    };
  }
};

export const parseDailySingleTasks = (body: string): DailySingleTask[] => {
  const [taskBody] = body.split("---");

  return taskBody
    .trim()
    .split("\n")
    .filter((body) => body)
    .map((line) => {
      const task = parseTaskLine(line);
      const dayTodoLink = parseLink(task.title);

      return {
        id: dayTodoLink.id,
        title: dayTodoLink.title,
        completed: task.completed,
      };
    });
};

export const parseDailyMultipleTasksDayTask = (
  body: string
): { dayTasks: DayTask[]; template: Task[] } => {
  const fragments = body
    .split("---")
    .map((str) => str.trim())
    .filter((body) => body);

  const rawTemplateBody = fragments.find(contentIsTemplate);

  const template: Task[] =
    rawTemplateBody
      ?.trim()
      .split("\n")
      .filter((str) => str.trim())
      .filter((line) => !isTitleLine(line))
      .map(parseTaskLine) || [];

  return {
    dayTasks: fragments
      .filter((splitedBody) => !contentIsTemplate(splitedBody))
      .map((rawDayTaskBody) => {
        const [rawTitle, ...lines] = rawDayTaskBody.trim().split("\n");

        return {
          ...parseDailyMultipleTaskDayTaskNoteLink(rawTitle),
          tasks: lines
            .filter((str) => str.trim())
            .map((line) => parseTaskLine(line)),
        };
      }),
    template,
  };
};

/**
 * daily multiple task todo 의 개별 dayTask 에서 제목과 링크를 추출.
 *
 * #### 제목                    -> title : '제목', link : undefined
 * #### [제목](:/link)            -> title : '제목', link : 'link'
 * #### [제목](:/link)\n- [ ] ... -> title : '제목', link : 'link'
 *
 * @param rawTitle
 */
export const parseDailyMultipleTaskDayTaskNoteLink = (
  rawTitle: string
): NoteLink => {
  // https://regexr.com/5ks3n
  const ret = /#### ([^\n]+)/.exec(rawTitle);
  if (ret) {
    try {
      return parseLink(ret[1]);
    } catch (e) {
      throw new Error(rawTitle + " is not valid joplin link");
    }
  } else {
    throw new Error(rawTitle + " is not raw title text");
  }
};
