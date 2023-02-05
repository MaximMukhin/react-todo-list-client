import React from "react";
import { Button } from "@mui/material";
import { createTodo } from "../../../api";

interface TodoAddProps {
  todoText: string;
}

export const TodoAdd: React.FC<TodoAddProps> = (props) => {
  const { todoText } = props;

  const handleCreateTodo = () => {
    console.log("handleCreateTodo");
    const todo = {
      task: todoText,
      state: false,
    };
    console.log(todo);
    createTodo({ todo }).then((data) => console.log(data));
  };

  return (
    <div>
      <Button
        onClick={handleCreateTodo}
        variant={"contained"}
        sx={{ height: "40px" }}
      >
        Add Todo
      </Button>
    </div>
  );
};
