import axios from "axios";

import { API_HOST } from "./apihost";

export const getTodo = async () => {
  try {
    const res = await axios.get(`${API_HOST}/todos`);
    const body = res.data;
    return body;
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};

export const createTodo = async (todo) => {
  try {
    const res = await axios.post(`${API_HOST}/todos`, todo);
    const body = await res.data;
    console.log(body);
  } catch (error) {
    console.error(`Ошибка ${error}`);
  }
};
