import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import WhyUs from './pages/WhyUs';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const isUserAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(isUserAuthenticated);
  }, []); 

  
  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      localStorage.setItem("isAuthenticated", "true");  
      setIsAuthenticated(true);
      return true;
    }
    alert("Invalid credentials"); 
    return false;
  };

 
  const handleRegister = (user) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const userExists = users.find((existingUser) => existingUser.email === user.email);
    
    if (userExists) {
      alert("This email has already been used!"






); 
      return false; 
    }

    users.push(user);  
    localStorage.setItem("users", JSON.stringify(users));  
    localStorage.setItem("isAuthenticated", "true");  
    setIsAuthenticated(true); 

    return true; 
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
