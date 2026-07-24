import React from "react";
import { useEffect, useState } from "react";
import API from "../utils/api";
import ContentCard from "../components/ContentCard";

export default function ContentList(){

const [contents,setContents]=useState([]);

useEffect(()=>{

API.get("/content")
.then(res=>{

setContents(
res.data.filter(
item=>item.status==="Published"
)
);

});

},[]);


return (

<div className="p-10 grid md:grid-cols-3 gap-6">

{
contents.map(item=>(

<ContentCard
key={item._id}
content={item}
/>

))
}

</div>

);

}
