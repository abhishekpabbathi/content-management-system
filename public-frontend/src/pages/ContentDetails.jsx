import BlockRenderer from "../components/BlockRenderer";
import parse from "html-react-parser";
import React,{useEffect,useState} from "react";
import {useParams,Link} from "react-router-dom";
import API from "../utils/api";

export default function ContentDetails(){

const{id}=useParams();

const[content,setContent]=useState(null);
const[shareOpen,setShareOpen]=useState(false);


useEffect(()=>{

const load=async()=>{

const res=await API.get("/content");

setContent(
res.data.find(
item=>item._id===id
)
);

};

load();

},[id]);


if(!content){

return(
<div className="min-h-screen flex items-center justify-center text-gray-500">
Loading...
</div>
);

}


const url=window.location.href;


const copyLink=()=>{
navigator.clipboard.writeText(url);
alert("Link copied");
};


return(

<div className="content-detail-page">


<div className="detail-navbar">

<Link to="/content">
← Content Library
</Link>


<div className="share-wrapper">


<button
onClick={()=>setShareOpen(!shareOpen)}
className="share-main-btn"
>
Share
</button>



{shareOpen && (

<div className="share-menu">


<a
href={`https://wa.me/?text=${content.title}%20${url}`}
target="_blank"
>
WhatsApp
</a>


<a
href={`mailto:?subject=${content.title}&body=${url}`}
>
Email
</a>


<a
href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}
target="_blank"
>
LinkedIn
</a>


<a
href={`https://twitter.com/intent/tweet?url=${url}&text=${content.title}`}
target="_blank"
>
X / Twitter
</a>


<a
href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}
target="_blank"
>
Facebook
</a>


<button onClick={copyLink}>
Copy Link
</button>


</div>

)}


</div>


</div>




<article className="detail-card">


<div className="category">
{content.category}
</div>


<h1>
{content.title}
</h1>



<div className="author">
Author: {content.author}
</div>



<div className="brand">
ContentCMS • Digital Content Platform
</div>



<p>
{content.description}
</p>



{content.body&&
<p>
{parse(content.body)}
</p>
}



<div className="detail-actions">


<Link to="/content">
More Content
</Link>




</div>


</article>



</div>

);

}
