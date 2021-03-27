interface Props {
  totalPoint?: number;
  onClickRefresh: () => void;
  oneTimeTodos: any;
  dailyTodos: any;
}

const DayTodoLayoutComponent: React.FC<Props> = ({
  totalPoint,
  onClickRefresh,
  oneTimeTodos,
  dailyTodos,
}) => {
  return (
    <article>
      <section>
        {totalPoint} point <button onClick={onClickRefresh}>refresh</button>
      </section>
      <div>
        <h2>Todo</h2>
        {oneTimeTodos}
      </div>
      <div>
        <h2>DailyTodo</h2>
        {dailyTodos}
      </div>
    </article>
  );
};

export { DayTodoLayoutComponent };
