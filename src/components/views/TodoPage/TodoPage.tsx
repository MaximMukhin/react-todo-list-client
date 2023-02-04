import React, { useEffect } from "react";
import { Page } from "../../layout/MainPage";
import { useRecoilState } from "recoil";
import { todosState } from "../../../states";
import { getTodo } from "../../../api";
import { TodoRender } from "./TodoRender";
import { TodoInput } from "./TodoInput";
import { TodoAdd } from "./TodoAdd";

export const TodoPage = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    getTodo().then((todos) => setTodos(todos));
  }, []);

  return (
    <Page>
      <div style={{ display: "flex", gap: "8px" }}>
        <TodoInput />
        <TodoAdd />
      </div>
      TODO
      <TodoRender todos={todos} />
    </Page>
  );
};
