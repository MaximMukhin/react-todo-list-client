import React from "react";
import { TodoModel } from "../../../types";
import { StyledCard } from "../../styled";
import { TodoDelete } from "./TodoDelete";

interface TodoRenderProps {
  todos: TodoModel[];
}

export const TodoRender: React.FC<TodoRenderProps> = (props) => {
  const { todos } = props;

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
        <TodoDelete _id={todo._id} />
      </div>
    </StyledCard>
  ));

  return <div>{displayTodo}</div>;
};
