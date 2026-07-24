import React from "react";
import { Routes, Route } from "react-router-dom";
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
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
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
      </Routes>
    </>
  );
}
