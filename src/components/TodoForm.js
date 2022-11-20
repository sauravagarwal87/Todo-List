import Button from "@mui/material/Button";

import React, { useState, useEffect, useRef } from "react";

const TodoForm = ({ todoText, onSubmit }) => {
  const [input, setInput] = useState(todoText);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Refresh page
  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      checked: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        placeholder="Add Todos"
        value={input}
        onChange={handleChange}
        name="text"
        className="todo-input"
        ref={inputRef}
      />
      <Button
        style={{ margin: 20 }}
        variant="contained"
        onClick={handleSubmit}
        className="todo-button"
      >
        Add todo
      </Button>
    </form>
  );
};

export default TodoForm;
