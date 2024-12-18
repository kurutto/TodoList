import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import InputTodo from "./component/InputTodo";
import TodoList from "./component/TodoList";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [edit, setEdit] = useState();
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
  const editTodo = (todoId) => {
    setEdit(todoId);
  }
  const editTodoList = (todoId, title, status, detail) => {
    const newList = todoList.map(todo => {
      if(todo.id === todoId ){
        return { id: todoId, title: title, status: status, detail: detail }
      }else{
        return todo
      }
    })
    setTodoList(newList)
    setEdit();
  }
  return (
    <div className="ui container" style={{ marginTop: "50px" }}>
      <InputTodo createTodoList={createTodoList} />
      <TodoList todoList={todoList} edit={edit} deleteTodo={deleteTodo} editTodo={editTodo} editTodoList={editTodoList} />
    </div>
  );
};

export default App;
