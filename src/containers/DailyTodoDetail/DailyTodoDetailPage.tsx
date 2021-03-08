import { ChangeEvent } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Loading } from "../../components/Loading";
import {
  setDailyTodoSubTaskCompleted,
  setDailyTodoTaskCompleted,
} from "../../services/todo";
import { Task, Todo } from "../../services/type";

const Checkbox = ({
  checked,
  disabled,
  onChange,
}: {
  checked: boolean;
  disabled: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <input
    type="checkbox"
    checked={checked}
    disabled={disabled}
    onChange={onChange}
  />
);

const SubTask = ({
  task,
  onChangeCompleted,
}: {
  task: Task;
  onChangeCompleted: (completed: boolean) => void;
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChangeCompleted(e.target.checked);
  return (
    <li style={{ listStyleType: "none", fontSize: "0.8em" }}>
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      {task.title}
    </li>
  );
};

export const DailyTodoDetailPage = ({
  todoDay,
  todo,
}: {
  todoDay: string;
  todo: Todo;
}) => {
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

  // if (!dailyTodoTask) {
  //   return <></>;
  // }

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
  //   mutationForAllComplete.isLoading || dailyTodoTaskQuery.isLoading;

  return (
    <div style={{ margin: "5px" }}>
      <div>
        <Loading loading={isLoadingAllComplete}>
          <Checkbox
            checked={todo.completed}
            disabled={!useAllComplete}
            onChange={handleChangeAllComplete}
          />
        </Loading>
        {todo.title}
      </div>

      <ul style={{ paddingLeft: "10px", margin: "0" }}>
        {todo.tasks.map((subTask) => {
          return (
            <SubTask
              key={subTask.title}
              task={subTask}
              onChangeCompleted={(completed) =>
                handleChangeSubtaskCompleted(subTask.title, completed)
              }
            />
          );
        })}
      </ul>
    </div>
  );
};
