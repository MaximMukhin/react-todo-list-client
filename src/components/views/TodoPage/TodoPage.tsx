import React, { useEffect, useState } from "react";
import { Page } from "../../layout/MainPage";
import { useRecoilState } from "recoil";
import { todosState } from "../../../states";
import { getTodos } from "../../../api";
import { TodoRender } from "./TodoRender";
import { TodoInput } from "./TodoInput";
import { TodoAdd } from "./TodoAdd";

export const TodoPage = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const [todo, setTodo] = useState("");

  const handleTodoText = (text: string) => {
    setTodo(text);
  };

  useEffect(() => {
    getTodos().then((todos) => {
      if (todos !== undefined) {
        setTodos(todos);
      } else {
        console.log("Сервер не доступен!");
      }
    });
  }, []);

  return (
    <Page>
      <div style={{ display: "flex", gap: "8px" }}>
        <TodoInput todoText={handleTodoText} />
        <TodoAdd todoText={todo} />
      </div>
      TODO
      {!!todos.length ? <TodoRender todos={todos} /> : null}
    </Page>
  );
};
