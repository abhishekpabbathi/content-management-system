import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="flex items-center justify-between px-10 py-5 border-b bg-white">
      <Link to="/" className="text-2xl font-bold text-indigo-700">
        ContentCMS
      </Link>

      <div className="flex items-center gap-7">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/content">Content</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={handleLogout} className="text-red-600 font-semibold">
          Logout
        </button>
      </div>
    </nav>
  );
}
