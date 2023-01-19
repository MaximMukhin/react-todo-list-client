import React from "react";
import { TodoModel } from "../../../types";

interface TodoRenderProps {
  todos: TodoModel[];
}

export const TodoRender: React.FC<TodoRenderProps> = (props) => {
  const { todos } = props;
  const displayTodo = todos.map((el, index: number) => (
    <div key={el._id}>{`${index + 1} ${el.task}`}</div>
  ));
  return <div>{displayTodo}</div>;
};
