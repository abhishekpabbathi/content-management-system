import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){

const location = useLocation();

const isActive = (path) => {
    return location.pathname === path ? "active" : "";
};

return(
<nav className="navbar">

<h2>
    <Link to="/">ContentCMS</Link>
</h2>

<div className="nav-links">

<Link className={isActive("/")} to="/">
    Home
</Link>

<Link className={isActive("/dashboard")} to="/dashboard">
    Dashboard
</Link>

<Link className={isActive("/content")} to="/content">
    Content
</Link>

<Link className={isActive("/about")} to="/about">
    About
</Link>

<Link className={isActive("/contact")} to="/contact">
    Contact
</Link>

</div>

</nav>
);

}
