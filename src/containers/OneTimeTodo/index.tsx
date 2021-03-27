import { ChangeEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import { OneTimeTodoComponent } from "../../components/modules/OneTimeTodo";
import { setCompleteOfOneTimeTodo } from "../../services/todo";
import { Todo } from "../../services/type";

export const OneTimeTodo = ({
  todoDay,
  todo: { id, title, completed },
}: {
  todoDay: string;
  todo: Todo;
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async ({ id, completed }: { id: string; completed: boolean }) =>
      setCompleteOfOneTimeTodo(todoDay, id, completed),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("dayTodo");
      },
    }
  );

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    mutation.mutate({
      id,
      completed: e.target.checked,
    });
  };

  return (
    <OneTimeTodoComponent
      isLoading={mutation.isLoading}
      completed={completed}
      onChange={handleChange}
      title={title}
    />
  );
};
