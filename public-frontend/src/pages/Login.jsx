import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import API from "../utils/api";

export default function Login(){

const navigate=useNavigate();

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

const res=await API.post("/login",{
email,
password
});

localStorage.setItem("token",res.data.token);
localStorage.setItem("user",JSON.stringify(res.data.user));

setSuccess("Login successful. Redirecting...");

setTimeout(()=>{
navigate("/dashboard");
},1000);

}
catch(err){

setError(
err.response?.data?.message||"Login failed"
);

}

setLoading(false);

};

return(
<div className="auth-page">

<div className="auth-card login-card">

<div className="auth-logo">
ContentCMS
</div>

<h1>
Welcome Back
</h1>

<p>
Login to access your content platform.
</p>


<form onSubmit={submit}>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={e=>setEmail(e.target.value)}
required
/>


<input
type="password"
placeholder="Password"
value={password}
onChange={e=>setPassword(e.target.value)}
required
/>


{error&&
<div className="error">
{error}
</div>
}


{success&&
<div className="success">
{success}
</div>
}


<button>

{loading?"Signing In...":"Login"}

</button>


</form>


<div className="auth-footer">

Don't have an account?

<Link to="/register">
Create Account
</Link>

</div>


</div>

</div>
);

}
