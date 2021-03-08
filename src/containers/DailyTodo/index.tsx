import { Todo } from "../../services/type";
import { DailyTodoDetailPage } from "../DailyTodoDetail/DailyTodoDetailPage";

type Params = {
  todoDay: string;
  todo: Todo;
};
export const DailyTodo = ({ todoDay, todo }: Params) => {
  return <DailyTodoDetailPage todo={todo} todoDay={todoDay} />;
};
