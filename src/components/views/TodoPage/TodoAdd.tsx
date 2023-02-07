import React from "react";
import { Button } from "@mui/material";
import { createTodo, getTodos } from "../../../api";
import { useSetRecoilState } from "recoil";
import { todosState } from "../../../states";

interface TodoAddProps {
  todoText: string;
}

export const TodoAdd: React.FC<TodoAddProps> = (props) => {
  const setTodos = useSetRecoilState(todosState);
  const { todoText } = props;

  const handleCreateTodo = () => {
    const todo = {
      task: todoText,
      state: false,
    };
    createTodo(todo).then(() => getTodos().then((todos) => setTodos(todos)));
  };

  return (
    <div>
      <Button
        disabled={!todoText.length}
        onClick={handleCreateTodo}
        variant={"contained"}
        sx={{ height: "40px" }}
      >
        Add Todo
      </Button>
    </div>
  );
};
