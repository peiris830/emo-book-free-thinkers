import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import UserPage from "./pages/User";
import Main from "./pages/Main";

function App() {
  return (
      <div>
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/user" element={<UserPage />} />
                </Routes>
            </BrowserRouter>
      </div>
  );
}

export default App;
