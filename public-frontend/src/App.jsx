import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContentDetails from "./pages/ContentDetails";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {isAuthenticated ? <Navbar /> : null}

      <Routes>
        <Route path="/login" element={<GuestRoute><Login /></GuestRoute>} />
        <Route path="/register" element={<GuestRoute><Register /></GuestRoute>} />

        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/content" element={<ProtectedRoute><Content /></ProtectedRoute>} />
        <Route path="/content/:id" element={<ProtectedRoute><ContentDetails /></ProtectedRoute>} />
        <Route path="/content/articles" element={<ProtectedRoute><Content /></ProtectedRoute>} />
        <Route path="/content/pages" element={<ProtectedRoute><Content /></ProtectedRoute>} />
        <Route path="/content/resources" element={<ProtectedRoute><Content /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/contact" element={<ProtectedRoute><Contact /></ProtectedRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
