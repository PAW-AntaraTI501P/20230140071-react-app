// src/pages/HomePage.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: #282c34;
  color: white;
  font-family: sans-serif;
`;

const Title = styled.h1`
  color: #61dafb;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled(Link)`
  padding: 12px 24px;
  font-size: 1.2em;
  margin: 0 5px;
  background-color: #61dafb;
  color: #282c34;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #52c1e8;
  }
`;

const LogoutButton = styled.button`
  padding: 12px 24px;
  font-size: 1.2em;
  margin: 0 5px;
  background-color: #ff4d4f;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e62e31;
  }
`;

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    alert("Anda telah logout.");
    navigate("/login");
  };

  return (
    <HomePageContainer>
      <Title>Selamat Datang di Aplikasi Todo List</Title>
      <Subtitle>Kelola semua tugas Anda dengan mudah dan efisien.</Subtitle>

      {user ? (
        <div>
          <h2>Selamat Datang, {user.name || user.email}!</h2>
          <ButtonContainer>
            <StyledButton to="/todos">Lihat Daftar Todo</StyledButton>
            <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
          </ButtonContainer>
        </div>
      ) : (
        <ButtonContainer>
          <StyledButton to="/todos">Lihat Daftar Todo</StyledButton>
          <StyledButton to="/register">Register</StyledButton>
          <StyledButton to="/login">Login</StyledButton>
        </ButtonContainer>
      )}
    </HomePageContainer>
  );
};

export default HomePage;