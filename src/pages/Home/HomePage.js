// src/pages/HomePage.js

import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", 
    textAlign: "center",
    backgroundColor: "#1f2937",
    color: "#e2e8f0", 
    fontFamily: "'Poppins', sans-serif", 
    padding: "40px 20px", 
    boxSizing: "border-box",
  };

  const titleStyle = {
    fontSize: "4em",
    fontWeight: "800", 
    marginBottom: "20px",
    color: "#60a5fa", 
    letterSpacing: "-1px", 
    lineHeight: "1.1",
  };

  const subtitleStyle = {
    fontSize: "1.6em",
    marginBottom: "40px",
    color: "#9ca3af", 
    maxWidth: "600px", 
    lineHeight: "1.5",
  };

  const buttonStyle = {
    padding: "16px 32px",
    fontSize: "1.3em",
    backgroundColor: "#60a5fa",
    color: "#1f2937",
    border: "none",
    borderRadius: "10px", 
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "700",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.25)", 
    transition: "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease",
    outline: "none", 
  };

  const buttonHoverStyle = {
    backgroundColor: "#3b82f6", 
    transform: "translateY(-3px)", 
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.35)", 
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Kelola Harimu, Selesaikan Tugasmu.</h1> {}
      <p style={subtitleStyle}>
        Aplikasi Todo List yang intuitif dan efisien untuk membantu Anda tetap terorganisir.
      </p>
      <Link
        to="/todos"
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      >
        Mulai Kelola Tugas Anda
      </Link>
    </div>
  );
};

export default HomePage;