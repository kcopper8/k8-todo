export type NoteId = string;

/**
 * 각 날의 할일
 *
 * (todo 와 daily 있는 거)
 */
export type DayTodo = NoteLink & {
  completed: boolean;
  dailyTodos: Todo[];
  todos: Todo[];
  /**
   * day todo 에 기입된 이날 점수.
   * (계산한 것과 어긋나서 차이나는 경우가 생길까봐 명확히 정의해 둠)
   */
  totalPoint?: number;
};

export type Task = {
  completed: boolean;
  title: string;
};

export type DailySingleTask = NoteLink & {
  completed: boolean;
};

/**
 * task 가 하나인 타입의 daily todo
 */
export type DailySingleTaskTodo = NoteLink & {
  completed: boolean;
  tasks: DailySingleTask[];
};

/**
 * daily multiple task todo 에 포함된 개별 day todo 에 대응하는 task 묶음
 *
 * todo: id 가 없을 수 있어서 좀 고민
 */
export type DayTask = {
  id: NoteId;
  title: string;
  tasks: Task[];
};

/**
 * task 가 복수개인 타입의 daily todo
 */
export type DailyMultipleTaskTodo = NoteLink & {
  completed: boolean;
  dayTasks: DayTask[];
  template: Task[];
};

export type DailyTodo = DailyMultipleTaskTodo | DailySingleTaskTodo;

/**
 * dailyTodo 가 DailySingleTaskTodo 인지
 * @param dailyTodo
 */
export function isDailySingleTaskTodo(
  dailyTodo: DailyTodo
): dailyTodo is DailySingleTaskTodo {
  return "tasks" in dailyTodo;
}

/**
 * 다른 노트로의 링크. 이건 url 과 title 에는 사용하지 않는다.
 */
export type NoteLink = {
  id: NoteId;
  title: string;
};

export type Todo = NoteLink & {
  completed: boolean;
  etc: string;
  tasks: Task[];
};

/**
 * 각 날짜별 할일 점수
 */
export type DayPoint = NoteLink & {
  point?: number;
};

/**
 * DayTodo 의 타이틀이 되는 ISO 형태의 날짜
 */
export type TodoDay = string;
