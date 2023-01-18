import "./App.css";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { getTodo } from "./api";
import { TodoPage } from "./components/views/TodoPage";
import { todoState } from "./states";
import { TodoModel } from "./types";

function App() {
  // const [todos, setTodos] = useRecoilState(todoState);
  const [todos, setTodos] = useState<TodoModel[]>([]);

  //const displayTodo = todo.map((el) => <div>{el._id}</div>);

  useEffect(() => {
    getTodo().then((todos) => setTodos(todos));
  }, []);

  return (
    <div className="App">
      <TodoPage />
      {todos.map((el) => (
        <div key={el._id}>{el._id}</div>
      ))}
    </div>
  );
}

export default App;
