import { atom } from "recoil";
import { TodoModel } from "../types";

export const todosState = atom<TodoModel[]>({
  key: "todos",
  default: [],
});
