import React from "react";
import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Content from "./pages/Content";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ContentDetails from "./pages/ContentDetails";

export default function App(){

return(
<>
<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>
<Route path="/content" element={<Content/>}/>
<Route path="/content/:id" element={<ContentDetails/>}/>
<Route path="/content/articles" element={<Content/>}/>
<Route path="/content/pages" element={<Content/>}/>
<Route path="/content/resources" element={<Content/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>

</Routes>

</>
);

}
