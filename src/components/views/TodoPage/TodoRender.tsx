import React from "react";
import { TodoModel } from "../../../types";
import { StyledCard } from "../../styled";
import { Button } from "@mui/material";

interface TodoRenderProps {
  todos: TodoModel[];
}

export const TodoRender: React.FC<TodoRenderProps> = (props) => {
  const { todos } = props;

  const test = (id?: string) => {
    console.log(id);
  };

  const displayTodo = todos.map((todo, index: number) => (
    <StyledCard key={todo._id}>
      <div
        style={{
          padding: "0 0 0 8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {`${index + 1}. ${todo.task}`}
        <Button
          variant={"outlined"}
          color={"error"}
          onClick={() => test(todo._id)}
        >
          Удалить
        </Button>
      </div>
    </StyledCard>
  ));

  return <div>{displayTodo}</div>;
};
