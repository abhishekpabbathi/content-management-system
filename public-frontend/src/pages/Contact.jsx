import React,{useState} from "react";

export default function Contact(){

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[message,setMessage]=useState("");

const submit=(e)=>{
e.preventDefault();
alert("Message sent successfully");
setName("");
setEmail("");
setMessage("");
};

return(
<div className="page-container">

<div className="page-card contact-card">

<h1>Contact ContentCMS</h1>

<p className="page-subtitle">
Have questions? Our team is ready to help you.
</p>

<form onSubmit={submit}>

<input
placeholder="Your Name"
value={name}
onChange={e=>setName(e.target.value)}
required
/>

<input
type="email"
placeholder="Email Address"
value={email}
onChange={e=>setEmail(e.target.value)}
required
/>

<textarea
placeholder="Your Message"
value={message}
onChange={e=>setMessage(e.target.value)}
required
/>

<button type="submit">
Send Message
</button>

</form>

</div>

</div>
);

}
