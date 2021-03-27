import { TodoDay } from "../../../services/type";

interface Props {
  supportDays: TodoDay[];
  currentDay: TodoDay;
  onClickSupportDay: (day: TodoDay) => void;
}

const SupportDaysComponent: React.FC<Props> = ({
  supportDays,
  onClickSupportDay,
  currentDay,
}) => {
  return (
    <section>
      {supportDays.map((todoDay) => {
        return (
          <button key={todoDay} onClick={() => onClickSupportDay(todoDay)}>
            {todoDay}
          </button>
        );
      })}
      <h1>{currentDay}</h1>
    </section>
  );
};
export { SupportDaysComponent };
