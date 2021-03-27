import { ChangeEvent } from "react";
import { Loading } from "../../atoms/Loading";

interface Props {
  isLoading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  completed: boolean;
  title: string;
}

const OneTimeTodoComponent: React.FC<Props> = ({
  isLoading,
  onChange,
  completed,
  title,
}) => {
  return (
    <div>
      <Loading loading={isLoading}>
        <input type="checkbox" checked={completed} onChange={onChange} />
      </Loading>
      {title}
    </div>
  );
};

export { OneTimeTodoComponent };
