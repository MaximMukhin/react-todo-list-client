import React from "react";
import { Checkbox } from "@mui/material";
import { TodoModel } from "../../../types";
import { getTodos, updateTodoById } from "../../../api";
import { useSetRecoilState } from "recoil";
import { todosState } from "../../../states";

interface TodoSwitchStateProps {
  state: TodoModel["state"];
  _id: TodoModel["_id"];
}

export const TodoSwitchState: React.FC<TodoSwitchStateProps> = (props) => {
  const setTodos = useSetRecoilState(todosState);
  const { _id, state } = props;

  const handleChandeState = () => {
    const newState: { state: boolean } = { state: !state };

    console.log("newState", newState);
    console.log("handleChandeState", _id);
    updateTodoById(_id, newState).then(() =>
      getTodos().then((todos) => setTodos(todos))
    );
  };

  return (
    <div>
      <Checkbox size={"small"} checked={state} onClick={handleChandeState} />
    </div>
  );
};
