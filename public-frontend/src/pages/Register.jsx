import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import API from "../utils/api";

export default function Register(){

const navigate=useNavigate();

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[loading,setLoading]=useState(false);
const[error,setError]=useState("");
const[success,setSuccess]=useState("");

const submit=async(e)=>{
e.preventDefault();

setError("");
setSuccess("");
setLoading(true);

try{

const res=await API.post("/register",{
name,
email,
password
});

setSuccess("Registration successful. Redirecting to login...");

setTimeout(()=>{
navigate("/login");
},1500);

}
catch(err){

setError(
err.response?.data?.message||"Registration failed"
);

}

setLoading(false);

};

return(
<div className="auth-page">

<div className="auth-card">

<h1>Create Account</h1>

<p>Join the enterprise content platform.</p>

<form onSubmit={submit}>

<input
placeholder="Full Name"
value={name}
onChange={e=>setName(e.target.value)}
required
/>

<input
placeholder="Email Address"
type="email"
value={email}
onChange={e=>setEmail(e.target.value)}
required
/>

<input
placeholder="Password"
type="password"
value={password}
onChange={e=>setPassword(e.target.value)}
required
/>

{error&&<div className="error">{error}</div>}
{success&&<div className="success">{success}</div>}

<button disabled={loading}>
{loading?"Creating Account...":"Create Account"}
</button>

</form>

<div className="auth-footer">
Already have an account?
<Link to="/login">Login</Link>
</div>

</div>

</div>
);

}
