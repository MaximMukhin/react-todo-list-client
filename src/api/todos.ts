import axios from "axios";

import { API_HOST } from "./apihost";
import { TodoModel } from "../types";

export const getTodos = async () => {
  try {
    const res = await axios.get(`${API_HOST}/todos`);
    return res.data;
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};

export const createTodo = async (todo: Omit<TodoModel, "_id">) => {
  try {
    const res = await axios.post(`${API_HOST}/todos`, todo);
    const body = await res.data;
    console.log(body);
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};

export const deleteTodoById = async (id: TodoModel["_id"]) => {
  try {
    const res = await axios.delete(`${API_HOST}/todos/${id}`);
    const body = await res.data;
    console.log(body);
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};

export const updateTodoById = async (id: TodoModel["_id"], todo: {}) => {
  try {
    const res = await axios.patch(`${API_HOST}/todos/${id}`, todo);
    const body = await res.data;
    console.log(body);
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};
