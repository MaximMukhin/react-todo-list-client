import React, { useState } from "react";
import { TextField } from "@mui/material";

export const TodoInput = () => {
  const [todo, setTodo] = useState("");
  console.log(todo);
  return (
    <div>
      <TextField
        onChange={(e) => setTodo(e.target.value)}
        fullWidth
        label="ADD TODO"
        id="todo-input"
        size="small"
        color="secondary"
      />
    </div>
  );
};
