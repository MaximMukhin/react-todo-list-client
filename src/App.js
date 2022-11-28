import { useRecoilState } from "recoil";
import "./App.css";
import TodoList from "./components/views/TodoList/TodoList";
import {todosState} from './atoms/todos'

function App() {
  const [todos, setTodos] = useRecoilState(todosState);
  return (
    <div className="App">
      <TodoList />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
