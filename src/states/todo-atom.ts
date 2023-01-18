import { atom } from "recoil";
import { TodoModel } from "../types";

export const todoState = atom<TodoModel>({
  key: "todo",
  default: {
    task: "string",
    state: false,
    _id: "string",
  },
});
