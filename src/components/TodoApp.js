import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

const TodoApp = () => {
  // [ {name, checked}, {name, checked} ]
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    console.log(newTodos);
    setTodos(newTodos);
  };

  const updateTodo = (todoId, newValue) => {
    // const updateValues = (prev) =>
    //   prev.map((item) => (item.id === todoId ? newValue : item));

    // function updateValues1(prev) {
    //   return prev.map((item) => (item.id === todoId ? newValue : item));
    // }

    // const updateValues2 = updateValues1(todos);

    const updateValues3 = todos.map((todo) =>
      todo.id === todoId ? newValue : todo
    );
    setTodos(updateValues3);
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    console.log(removedArr);
    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    console.log("complete called");
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter((todo) => todo.checked === true);

  const uncompleteTodos = todos.filter((todo) => todo.checked === false);

  return (
    <Container className="container" maxWidth="sm">
      <Box className="grad" sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        {/* Under Container Part. */}
        <>
          <Box sx={{ width: "100%", maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
              TODOLIST
            </Typography>
          </Box>
          <TodoForm onSubmit={addTodo} />

          <TodoList
            title="Incomplete todo"
            todos={uncompleteTodos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
          <TodoList
            title="Complete todo"
            todos={completedTodos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        </>
      </Box>
    </Container>
  );
};

export default TodoApp;
