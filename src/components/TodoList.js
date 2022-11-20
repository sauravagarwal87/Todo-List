import React, { useState } from "react";
import TodoForm from "./TodoForm";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Card, Typography } from "@mui/material";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";

const TodoList = ({ title, todos, completeTodo, removeTodo, updateTodo }) => {
  const [editId, setEditId] = useState("");
  const [editText, setText] = useState("");
  const [open, setOpen] = React.useState(false);
  if (todos.length === 0) {
    return null;
  }
  const submitUpdate = (value) => {
    updateTodo(editId, value);
    setEditId("");
  };

  const handleClick = (todo) => {
    completeTodo(todo.id);
  };

  const handleClickOpen = (id, text) => {
    setOpen(true);
    setEditId(id);
    setText(text);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Stack Creating code using material ui
  const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: "4px",
    color: theme.palette.text.secondary,
    margin: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));

  return (
    <>
      {editId && (
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Edit ur Todo"}</DialogTitle>
            <DialogActions>
              <TodoForm todoText={editText} onSubmit={submitUpdate} />
            </DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </Dialog>
        </div>
      )}
      <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
        {title}
      </Typography>
      <Stack spacing={1}>
        {todos.map((todo, checked) => (
          <Item style={{ margin: 8 }}>
            <input
              type="checkbox"
              id="myCheck"
              onClick={() => {
                handleClick(todo);
              }}
            ></input>
            <p
              className="todo-text"
              style={{ textDecoration: todo.checked ? "line-through" : "none" }}
            >
              {todo.text}
            </p>
            <div className="icons">
              <DeleteIcon
                onClick={() => removeTodo(todo.id)}
                className="delete-icon"
              />
              <EditIcon
                onClick={() => {
                  handleClickOpen(todo.id, todo.text);
                }}
                className="edit-icon"
              />
            </div>
          </Item>
        ))}
      </Stack>
    </>
  );
};

export default TodoList;
