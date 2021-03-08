import { DateTime } from "luxon";
import { useState } from "react";
import { useQuery } from "react-query";
import { getDayTodo, getSupportDays } from "../../services/todo";
import { JoplinInvalidConnectionError } from "../../services/todoStorage/client";
import { TodoDay } from "../../services/type";
import { DailyTodo } from "../DailyTodo";
import { OneTimeTodo } from "../OneTimeTodo";
import { TokenInput } from "../TokenInput";

export function TodoList() {
  const supportDays = useQuery("todoDays", getSupportDays);
  const [todoDay, setTodoDay] = useState<TodoDay>(DateTime.local().toISODate());
  const dayTodoQuery = useQuery(["dayTodo", todoDay], async (arg) => {
    return getDayTodo(todoDay);
  });

  const showTokenInput = JoplinInvalidConnectionError.isThis(
    dayTodoQuery.error
  );

  return (
    <>
      {showTokenInput && <TokenInput />}
      {!showTokenInput && (
        <>
          <section>
            {supportDays.data?.map((todoDay) => {
              return (
                <button key={todoDay} onClick={() => setTodoDay(todoDay)}>
                  {todoDay}{" "}
                </button>
              );
            })}
            <h1>{todoDay}</h1>
          </section>
          <article>
            <p>{dayTodoQuery.data?.totalPoint}</p>
            <div>
              <h2>Todo</h2>
              {dayTodoQuery.data?.todos.map((todo) => {
                return (
                  <OneTimeTodo key={todo.id} todo={todo} todoDay={todoDay} />
                );
              })}
            </div>
            <div>
              <h2>DailyTodo</h2>
              {dayTodoQuery.data?.dailyTodos.map((todo) => {
                return (
                  <DailyTodo key={todo.id} todo={todo} todoDay={todoDay} />
                );
              })}
            </div>
          </article>
        </>
      )}
    </>
  );
}
