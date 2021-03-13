import { useQuery } from "react-query";
import { getDayTodo } from "../../services/todo";
import { DailyTodo } from "../DailyTodo";
import { OneTimeTodo } from "../OneTimeTodo";

interface Props {
  todoDay: string;
}

const DayTodoComponent: React.FC<Props> = ({ todoDay }) => {
  const { data: dayTodo } = useQuery(["dayTodo", todoDay], async () => {
    return getDayTodo(todoDay);
  });

  const handleRefreshDayTodo = () => {};
  return (
    <article>
      <section>
        {dayTodo?.totalPoint} point{" "}
        <button onClick={handleRefreshDayTodo}>refresh</button>
      </section>
      <div>
        <h2>Todo</h2>
        {dayTodo?.todos.map((todo) => {
          return (
            <OneTimeTodo key={todo.id} todo={todo} todoDay={dayTodo.title} />
          );
        })}
      </div>
      <div>
        <h2>DailyTodo</h2>
        {dayTodo?.dailyTodos.map((todo) => {
          return (
            <DailyTodo key={todo.id} todo={todo} todoDay={dayTodo.title} />
          );
        })}
      </div>
    </article>
  );
};

export { DayTodoComponent as DayTodo };
