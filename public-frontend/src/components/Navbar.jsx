import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-12 py-5 border-b bg-white">
      <Link to="/" className="text-2xl font-bold text-indigo-700">
        ContentCMS
      </Link>

      {!token ? (
        <div className="flex gap-6">
          <Link to="/login" className="font-semibold text-indigo-600">
            Login
          </Link>

          <Link to="/register" className="font-semibold text-indigo-600">
            Register
          </Link>
        </div>
      ) : (
        <div className="flex gap-8">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/content">Content</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <button
            onClick={logout}
            className="font-semibold text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
}
