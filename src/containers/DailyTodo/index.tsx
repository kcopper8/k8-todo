import { ChangeEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import { DailyTodoComponent } from "../../components/modules/DailyTodo";
import {
  setDailyTodoSubTaskCompleted,
  setDailyTodoTaskCompleted,
} from "../../services/todo";
import { Todo } from "../../services/type";

type Params = {
  todoDay: string;
  todo: Todo;
};

export const DailyTodo = ({ todoDay, todo }: Params) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    async ({ title, completed }: { title: string; completed: boolean }) =>
      setDailyTodoSubTaskCompleted(todoDay, todo.id, title, completed),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("dayTodo");
      },
    }
  );

  const mutationForAllComplete = useMutation(
    async ({ completed }: { completed: boolean }) =>
      setDailyTodoTaskCompleted(todoDay, todo.id, completed),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("dayTodo");
      },
    }
  );

  const handleChangeSubtaskCompleted = (title: string, completed: boolean) => {
    mutate({
      title,
      completed,
    });
  };

  const useAllComplete = todo.tasks.length === 0;
  const handleChangeAllComplete = (e: ChangeEvent<HTMLInputElement>) => {
    mutationForAllComplete.mutate({
      completed: e.target.checked,
    });
  };

  const isLoadingAllComplete = false;

  return (
    <DailyTodoComponent
      todo={todo}
      isLoadingAllComplete={isLoadingAllComplete}
      useAllComplete={useAllComplete}
      handleChangeAllComplete={handleChangeAllComplete}
      handleChangeSubtaskCompleted={handleChangeSubtaskCompleted}
    />
  );
};
