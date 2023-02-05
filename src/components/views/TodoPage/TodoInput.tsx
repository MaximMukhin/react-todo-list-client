import React from "react";
import { TextField } from "@mui/material";

interface TodoInputProps {
  todoText: Function;
}

export const TodoInput: React.FC<TodoInputProps> = (props) => {
  const { todoText } = props;
  return (
    <div>
      <TextField
        onChange={(e) => todoText(e.target.value)}
        fullWidth
        label="ADD TODO"
        id="todo-input"
        size="small"
        color="secondary"
      />
    </div>
  );
};
