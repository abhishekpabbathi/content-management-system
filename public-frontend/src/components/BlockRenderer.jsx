import React from "react";

export default function BlockRenderer({content}){

if(!content) return null;

if(typeof content==="string"){
return <p>{content}</p>;
}

if(!content.blocks){
return <p>{JSON.stringify(content)}</p>;
}

return(

<div>

{
content.blocks.map((block,index)=>{

switch(block.type){

case "header":

return(
<h2 key={index}>
{block.data.text}
</h2>
);

case "paragraph":

return(
<p key={index}>
{block.data.text}
</p>
);

case "list":

return(
<ul key={index}>
{
block.data.items.map((item,i)=>
<li key={i}>{item}</li>
)
}
</ul>
);

case "table":

return(
<table key={index} border="1">
<tbody>

{
block.data.content.map((row,i)=>
<tr key={i}>
{
row.map((cell,j)=>
<td key={j}>{cell}</td>
)
}
</tr>
)
}

</tbody>
</table>
);

default:
return null;

}

})

}

</div>

);

}
