// src/components/TodoList.js

import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggleCompleted, onDeleteTodo, onUpdateTodo }) => {
  const listContainerStyle = {
    padding: "0",
    margin: "0",
    width: "100%",
    maxWidth: "600px", 
    boxSizing: "border-box",
  };

  const ulStyle = {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "15px", 
  };

  const emptyListMessageStyle = {
    textAlign: "center",
    color: "#9ca3af",
    fontStyle: "italic",
    padding: "20px",
    backgroundColor: "#2d3748",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={listContainerStyle}>
      {todos.length > 0 ? (
        <ul style={ulStyle}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggleCompleted={onToggleCompleted}
              onDeleteTodo={onDeleteTodo}
              onUpdateTodo={onUpdateTodo}
            />
          ))}
        </ul>
      ) : (
        <p style={emptyListMessageStyle}>
          Tidak ada tugas saat ini. Ayo tambahkan tugas pertama Anda!
        </p>
      )}
    </div>
  );
};

export default TodoList;