import { useQuery, useQueryClient } from "react-query";
import { DayTodoLayoutComponent } from "../../components/modules/DayTodoLayout";
import { getDayTodo, refreshDayTodo } from "../../services/todo";
import { DailyTodo } from "../DailyTodo";
import { OneTimeTodo } from "../OneTimeTodo";

interface Props {
  todoDay: string;
}

const DayTodoComponent: React.FC<Props> = ({ todoDay }) => {
  const { data: dayTodo } = useQuery(["dayTodo", todoDay], async () => {
    return getDayTodo(todoDay);
  });

  const queryClient = useQueryClient();

  const handleRefreshDayTodo = async () => {
    await refreshDayTodo(todoDay);
    queryClient.invalidateQueries(["dayTodo", todoDay]);
  };
  return (
    <DayTodoLayoutComponent
      totalPoint={dayTodo?.totalPoint}
      onClickRefresh={handleRefreshDayTodo}
      oneTimeTodos={dayTodo?.todos.map((todo) => {
        return (
          <OneTimeTodo key={todo.id} todo={todo} todoDay={dayTodo.title} />
        );
      })}
      dailyTodos={dayTodo?.dailyTodos.map((todo) => {
        return <DailyTodo key={todo.id} todo={todo} todoDay={dayTodo.title} />;
      })}
    />
  );
};

export { DayTodoComponent as DayTodo };
