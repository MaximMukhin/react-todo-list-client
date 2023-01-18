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
