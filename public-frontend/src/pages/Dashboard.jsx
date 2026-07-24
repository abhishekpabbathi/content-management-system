import React from "react";
import {useNavigate,Link} from "react-router-dom";

export default function Dashboard(){

const navigate=useNavigate();
const user=JSON.parse(localStorage.getItem("user"));

const logout=()=>{
localStorage.clear();
navigate("/login");
};

return(
<div className="user-dashboard">

<header className="user-header">

<div>
<h1>Welcome, {user?.name}</h1>
<p>Manage your account and explore content.</p>
</div>

<button onClick={logout}>
Logout
</button>

</header>


<section className="profile-card">

<h2>User Profile</h2>

<p>
<strong>Name:</strong> {user?.name}
</p>

<p>
<strong>Email:</strong> {user?.email}
</p>

</section>


<section className="user-actions">

<div>
<h3>Explore Content</h3>
<p>
Read articles, pages and published resources.
</p>

<Link to="/content">
<button>
Browse Content
</button>
</Link>

</div>


<div>
<h3>Your Account</h3>

<p>
Your account is active and secure.
</p>

</div>

</section>


</div>
);

}
