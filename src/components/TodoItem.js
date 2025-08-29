// src/components/TodoItem.js

import React, { useState } from "react";

const TodoItem = ({ todo, onToggleCompleted, onDeleteTodo, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleUpdate = () => {
    if (newTask.trim() !== "") {
      onUpdateTodo(todo.id, newTask);
      setIsEditing(false);
    }
  };

  const itemStyle = {
    marginBottom: "10px",
    padding: "15px 20px",
    borderRadius: "10px",
    backgroundColor: "#2d3748", 
    borderLeft: todo.completed ? "5px solid #10b981" : "5px solid #60a5fa", 
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.15)", 
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer", 
    position: "relative", 
    overflow: "hidden", 
  };

  const itemHoverStyle = {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.25)",
  };

  const taskTextStyle = {
    margin: 0,
    color: todo.completed ? "#9ca3af" : "#e2e8f0", 
    textDecoration: todo.completed ? "line-through" : "none",
    flex: 1,
    wordBreak: "break-word",
    fontSize: "1.1em",
    fontWeight: todo.completed ? "normal" : "500",
    transition: "color 0.3s ease, text-decoration 0.3s ease",
  };

  const inputEditStyle = {
    flex: 1,
    marginRight: "15px",
    padding: "8px 12px",
    borderRadius: "8px",
    border: "1px solid #60a5fa",
    backgroundColor: "#1f2937",
    color: "#e2e8f0",
    fontSize: "1em",
    outline: "none",
    boxSizing: "border-box",
  };

  const buttonGroupStyle = {
    display: "flex",
    gap: "8px",
    flexShrink: 0,
  };

  const baseButtonStyle = {
    padding: "8px 15px",
    borderRadius: "8px", 
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.9em",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    outline: "none",
  };

  const saveButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: "#10b981", 
    color: "white",
  };
  const saveButtonHoverStyle = { backgroundColor: "#047857", transform: "translateY(-1px)" };

  const cancelButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: "#f59e0b",
    color: "white",
  };
  const cancelButtonHoverStyle = { backgroundColor: "#d97706", transform: "translateY(-1px)" };

  const toggleButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: todo.completed ? "#f59e0b" : "#10b981", 
    color: "white",
  };
  const toggleButtonHoverStyle = {
    backgroundColor: todo.completed ? "#d97706" : "#047857",
    transform: "translateY(-1px)",
  };

  const updateButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: "#60a5fa",
    color: "#1f2937",
  };
  const updateButtonHoverStyle = { backgroundColor: "#3b82f6", transform: "translateY(-1px)" };

  const deleteButtonStyle = {
    ...baseButtonStyle,
    backgroundColor: "#ef4444",
    color: "white",
  };
  const deleteButtonHoverStyle = { backgroundColor: "#b91c1c", transform: "translateY(-1px)" };

  return (
    <li
      style={itemStyle}
      onMouseOver={(e) => Object.assign(e.currentTarget.style, itemHoverStyle)}
      onMouseOut={(e) => Object.assign(e.currentTarget.style, itemStyle)}
    >
      {isEditing ? (
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={inputEditStyle}
        />
      ) : (
        <h3 style={taskTextStyle}>{todo.task}</h3>
      )}

      <div style={buttonGroupStyle}>
        {isEditing ? (
          <>
            <button
              onClick={handleUpdate}
              style={saveButtonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, saveButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, saveButtonStyle)}
            >
              Simpan
            </button>
            <button
              onClick={() => setIsEditing(false)}
              style={cancelButtonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, cancelButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, cancelButtonStyle)}
            >
              Batal
            </button>
          </>
        ) : (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Mencegah event li
                onToggleCompleted(todo.id, todo.completed);
              }}
              style={toggleButtonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, toggleButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, toggleButtonStyle)}
            >
              {todo.completed ? "Batal Selesai" : "Selesai"}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Mencegah event li
                setIsEditing(true);
              }}
              style={updateButtonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, updateButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, updateButtonStyle)}
            >
              Edit
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Mencegah event li
                onDeleteTodo(todo.id);
              }}
              style={deleteButtonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, deleteButtonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, deleteButtonStyle)}
            >
              Hapus
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;