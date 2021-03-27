import { DateTime } from "luxon";
import { useState } from "react";
import { useQuery } from "react-query";
import { SupportDaysComponent } from "../../components/modules/SupportDays";
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
      {!showTokenInput && supportDays.data && (
        <>
          <SupportDaysComponent
            supportDays={supportDays.data}
            onClickSupportDay={setTodoDay}
            currentDay={todoDay}
          />

          <DayTodo todoDay={todoDay} />
        </>
      )}
    </>
  );
}
