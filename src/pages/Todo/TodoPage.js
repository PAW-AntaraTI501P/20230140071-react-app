// src/pages/TodoPage.js

import React, { useState, useEffect, useCallback } from "react";
import TodoForm from "../../components/TodoForm.js";
import TodoList from "../../components/TodoList.js";
import SearchInput from "../../components/SearchInput.js";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchTodos = useCallback((searchQuery) => {
    setLoading(true);
    const url = searchQuery
      ? `/api/todos?search=${encodeURIComponent(searchQuery)}`
      : "/api/todos";

    fetch(url)
      .then((response) => {
        if (!response.ok)
          throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
      })
      .then((data) => {
        setTodos(data.todos);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setTodos([]);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const timerId = setTimeout(() => {
      fetchTodos(searchTerm);
    }, 500);
    return () => clearTimeout(timerId);
  }, [searchTerm, fetchTodos]);

  const handleAddTodo = (task) => {
    fetch("/api/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.task.toLowerCase().includes(searchTerm.toLowerCase())) {
          setTodos([
            ...todos,
            { id: data.id, task: data.task, completed: false },
          ]);
        }
      })
      .catch((err) => console.error("Error adding todo:", err));
  };

  const handleDeleteTodo = (id) => {
    fetch(`/api/todos/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((err) => console.error("Error deleting todo:", err));
  };

  const handleToggleCompleted = (id, completed) => {
    fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !completed }),
    })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !completed } : todo
          )
        );
      })
      .catch((err) => console.error("Error updating todo:", err));
  };

  const handleUpdateTodo = (id, newTask) => {
    fetch(`/api/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTask }),
    })
      .then(() => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task: newTask } : todo
          )
        );
        setEditingTodoId(null);
      })
      .catch((err) => console.error("Error updating todo:", err));
  };

  
  const pageContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    padding: "40px 20px",
    backgroundColor: "#1f2937", 
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    color: "#e2e8f0", 
    boxSizing: "border-box", 
  };


  const contentWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "600px", 
  };

  const headingStyle = {
    fontSize: "2.5em",
    fontWeight: "800",
    color: "#60a5fa", 
    marginBottom: "20px",
    textAlign: "center",
  };

  const loadingStyle = {
    textAlign: "center",
    color: "#60a5fa",
    fontSize: "1.5em",
    marginTop: "50px",
  };

  const errorStyle = {
    textAlign: "center",
    color: "#ef4444",
    fontSize: "1.2em",
    marginTop: "50px",
  };

  if (loading) {
    return (
      <div style={pageContainerStyle}>
        <div style={loadingStyle}>Memuat...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={pageContainerStyle}>
        <div style={errorStyle}>Terjadi kesalahan: {error}</div>
      </div>
    );
  }

  return (
    <div style={pageContainerStyle}>
      <div style={contentWrapperStyle}>
        <h1 style={headingStyle}>Daftar Tugas Anda</h1>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList
          todos={todos}
          onToggleCompleted={handleToggleCompleted}
          onDeleteTodo={handleDeleteTodo}
          onUpdateTodo={handleUpdateTodo}
          editingTodoId={editingTodoId}
          onSetEditingTodoId={setEditingTodoId}
        />
      </div>
    </div>
  );
};

export default TodoPage;