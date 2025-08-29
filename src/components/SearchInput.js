// src/components/SearchInput.js

import React from "react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const inputContainerStyle = {
    margin: "25px 0", 
    maxWidth: "600px", 
    width: "100%",
    boxSizing: "border-box",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid #4b5563",
    backgroundColor: "#2d3748",
    color: "#e2e8f0",
    fontSize: "1em",
    boxSizing: "border-box",
    boxShadow: "0 3px 8px rgba(0, 0, 0, 0.2)", 
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    outline: "none", 
  };
  return (
    <div style={inputContainerStyle}>
      <input
        type="text"
        placeholder="Cari tugas Anda di sini..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />
    </div>
  );
};

export default SearchInput;