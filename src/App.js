import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./component/InputForm";
import TodoList from "./component/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const createTodoList = (title, status, detail) => {
    setTodoList([
      { id: uuidv4(), title: title, status: status, detail: detail },
      ...todoList,
    ]);
  };
  const deleteTodo = (todoId) => {
    const newList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newList);
  };
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <InputTodo createTodoList={createTodoList} />
      <TodoList todoList={todoList} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
