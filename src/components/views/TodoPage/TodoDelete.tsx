import React from "react";
import { Button } from "@mui/material";
import { deleteTodoById, getTodos } from "../../../api";
import { useSetRecoilState } from "recoil";
import { todosState } from "../../../states";
import { TodoModel } from "../../../types";

export const TodoDelete = (props: { _id: TodoModel["_id"] }) => {
  const setTodos = useSetRecoilState(todosState);
  const { _id } = props;

  const handleTodoDelete = (id: TodoModel["_id"]) => {
    console.log(id);
    deleteTodoById(_id).then(() => getTodos().then((todos) => setTodos(todos)));
  };

  return (
    <div>
      <Button
        onClick={() => handleTodoDelete(_id)}
        variant={"outlined"}
        color={"error"}
      >
        Удалить
      </Button>
    </div>
  );
};
