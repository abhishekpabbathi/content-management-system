import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContentDetails from "./pages/ContentDetails";

export default function App() {
  const location = useLocation();
  const token = localStorage.getItem("token");

  const hideNavbar =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <>
      {!hideNavbar && token && <Navbar />}

      <Routes>

        <Route
          path="/"
          element={
            token ? (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/login"
          element={token ? <Navigate to="/" replace /> : <Login />}
        />

        <Route
          path="/register"
          element={token ? <Navigate to="/" replace /> : <Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/content"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />

        <Route
          path="/content/:id"
          element={
            <ProtectedRoute>
              <ContentDetails />
            </ProtectedRoute>
          }
        />

        <Route
          path="/content/articles"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />

        <Route
          path="/content/pages"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />

        <Route
          path="/content/resources"
          element={
            <ProtectedRoute>
              <Content />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<Navigate to={token ? "/" : "/login"} replace />}
        />

      </Routes>
    </>
  );
}
