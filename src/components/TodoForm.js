// src/components/TodoForm.js

import React, { useState } from "react";

const TodoForm = ({ onAddTodo }) => {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      onAddTodo(newTask);
      setNewTask("");
    }
  };

  const formContainerStyle = {
    marginBottom: "30px",
    padding: "25px",
    backgroundColor: "#2d3748",
    borderRadius: "12px", 
    boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "600px",
    boxSizing: "border-box",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#e2e8f0",
    marginBottom: "20px",
    fontSize: "1.8em",
    fontWeight: "600",
  };

  const formStyle = {
    display: "flex",
    gap: "10px",
  };

  const inputStyle = {
    flexGrow: "1",
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid #4b5563",
    backgroundColor: "#1f2937",
    color: "#e2e8f0",
    fontSize: "1em",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
  };

  const buttonStyle = {
    padding: "12px 20px",
    backgroundColor: "#60a5fa",
    color: "#1f2937",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "1em",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.15)",
    transition: "background-color 0.3s ease, transform 0.2s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "#3b82f6",
    transform: "translateY(-1px)",
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={headingStyle}>Tambahkan Tugas Baru</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          name="task"
          placeholder="Apa yang perlu Anda selesaikan?"
          value={newTask}
          onChange={handleInputChange}
          required
          style={inputStyle}
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
          onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
        >
          Tambah
        </button>
      </form>
    </div>
  );
};

export default TodoForm;