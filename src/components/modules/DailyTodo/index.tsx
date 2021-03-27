import { ChangeEvent } from "react";
import { Task, Todo } from "../../../services/type";
import { Checkbox } from "../../atoms/Checkbox";
import { Loading } from "../../atoms/Loading";

interface Props {
  isLoadingAllComplete: boolean;
  useAllComplete: boolean;
  todo: Todo;

  handleChangeAllComplete: (e: ChangeEvent<HTMLInputElement>) => void;
  handleChangeSubtaskCompleted: (title: string, completed: boolean) => void;
}

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
      <Checkbox checked={task.completed} onChange={handleChange} />
      {task.title}
    </li>
  );
};

const DailyTodoComponent: React.FC<Props> = ({
  isLoadingAllComplete,
  useAllComplete,
  todo,
  handleChangeAllComplete,
  handleChangeSubtaskCompleted,
}) => {
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

export { DailyTodoComponent };
