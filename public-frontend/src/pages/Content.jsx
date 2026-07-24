import React,{useEffect,useState} from "react";
import API from "../utils/api";
import {Link} from "react-router-dom";

export default function Content(){

const[contents,setContents]=useState([]);
const[selected,setSelected]=useState("Articles");
const[search,setSearch]=useState("");


useEffect(()=>{

const load=async()=>{

const res=await API.get("/content");

setContents(res.data);

};

load();

},[]);


const data=contents.filter(item=>
item.category===selected &&
(
item.title.toLowerCase().includes(search.toLowerCase()) ||
item.description.toLowerCase().includes(search.toLowerCase()) ||
item.body.toLowerCase().includes(search.toLowerCase())
)
);


return(

<div className="content-page">


<header className="content-header">

<h1>
Content Library
</h1>

<p>
Explore published articles, pages and digital resources.
</p>

</header>


<div className="content-layout">


<aside className="content-sidebar">

<input
type="text"
placeholder="Search content..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
width:"100%",
padding:"12px",
borderRadius:"8px",
border:"1px solid #ddd",
marginBottom:"15px",
fontSize:"14px"
}}
/>

<h3>
Contents
</h3>


<ul>


{
[
"Overview",
"Articles",
"Pages",
"Resources"
].map(item=>(

<li
key={item}
onClick={()=>setSelected(item)}
style={{
cursor:"pointer",
padding:"10px",
borderRadius:"8px",
background:selected===item?"#2563eb":"transparent",
color:selected===item?"white":"black",
fontWeight:selected===item?"700":"400"
}}
>

{item}

</li>

))
}


</ul>


</aside>



<main className="article-list">


{
data.length?


data.map(item=>(


<article
key={item._id}
className="article-card"
>


<h2>
{item.title}
</h2>


<div className="article-meta">

{item.category}

</div>


<p>
{item.description}
</p>


<Link
to={`/content/${item._id}`}
>

<button>
Read More
</button>

</Link>


</article>


))


:


<article className="article-card">

<h2>
No {selected} Content Available
</h2>


<p>
Create and publish {selected} content from Admin Dashboard.
</p>


</article>


}


</main>


</div>


</div>

);

}
