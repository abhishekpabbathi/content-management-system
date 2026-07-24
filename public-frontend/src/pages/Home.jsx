import React from "react";
import {Link} from "react-router-dom";

export default function Home(){

const user=JSON.parse(localStorage.getItem("user"));

return(
<div className="landing">



<section className="hero">

<div className="hero-content">

<span className="badge">
Enterprise CMS Platform
</span>

<h1>
Build, Manage & Publish
Digital Content Faster
</h1>

<p>
A secure content management platform designed for teams
to create, organize and deliver modern digital experiences.
</p>

<div className="hero-actions">

{user?
<Link to="/dashboard">
<button>Open Dashboard</button>
</Link>
:
<>
<Link to="/register">
<button>Create Account</button>
</Link>

<Link to="/login">
<button className="secondary">
Login
</button>
</Link>
</>
}

</div>

</div>

<div className="hero-card">

<div>
<h3>Smart Content</h3>
<p>Create and manage pages easily.</p>
</div>

<div>
<h3>Secure Access</h3>
<p>Authentication powered platform.</p>
</div>

<div>
<h3>Scalable System</h3>
<p>Ready for enterprise growth.</p>
</div>

</div>

</section>

</div>
);

}
