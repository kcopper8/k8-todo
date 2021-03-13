import { DateTime } from "luxon";
import { useState } from "react";
import { useQuery } from "react-query";
import { checkConnection } from "../../services/localStorage/tokenService";
import { getSupportDays } from "../../services/todo";
import { TodoDay } from "../../services/type";
import { DayTodo } from "../DayTodo";
import { TokenInput } from "../TokenInput";

export function TodoList() {
  const { data: connection } = useQuery("checkConnection", checkConnection);
  const supportDays = useQuery("todoDays", getSupportDays);
  const [todoDay, setTodoDay] = useState<TodoDay>(DateTime.local().toISODate());

  const showTokenInput = !connection;

  return (
    <>
      {showTokenInput && <TokenInput />}
      {!showTokenInput && (
        <>
          <section>
            {supportDays.data?.map((todoDay) => {
              return (
                <button key={todoDay} onClick={() => setTodoDay(todoDay)}>
                  {todoDay}
                </button>
              );
            })}
            <h1>{todoDay}</h1>
          </section>
          <DayTodo todoDay={todoDay} />
        </>
      )}
    </>
  );
}
