import React, { useEffect } from "react";
import { Page } from "../../layout/MainPage";
import { useRecoilState } from "recoil";
import { todosState } from "../../../states";
import { getTodo } from "../../../api";
import { TodoRender } from "./TodoRender";

export const TodoPage = () => {
  const [todos, setTodos] = useRecoilState(todosState);

  useEffect(() => {
    getTodo().then((todos) => setTodos(todos));
  }, []);

  return (
    <Page>
      TODO
      <TodoRender todos={todos} />
    </Page>
  );
};
