import React,{useState} from "react";

export default function BlockEditor({blocks,setBlocks}){

const addBlock=(type)=>{

setBlocks([
...blocks,
{
type,
data:{text:""}
}
]);

};


const updateBlock=(index,value)=>{

const updated=[...blocks];

updated[index].data.text=value;

setBlocks(updated);

};


return(

<div>

<h3>
Content Blocks
</h3>


<div style={{
display:"flex",
gap:"10px",
flexWrap:"wrap",
marginBottom:"15px"
}}>

{
[
"heading",
"paragraph",
"list",
"table",
"code",
"math"
].map(type=>(

<button
key={type}
type="button"
onClick={()=>addBlock(type)}
>

+ {type}

</button>

))
}

</div>


{
blocks.map((block,index)=>(

<div
key={index}
style={{
border:"1px solid #ddd",
padding:"10px",
marginBottom:"10px",
borderRadius:"8px"
}}
>

<b>
{block.type}
</b>


<textarea
value={block.data.text}
onChange={(e)=>updateBlock(index,e.target.value)}
style={{
width:"100%",
minHeight:"80px",
marginTop:"10px"
}}
/>


</div>

))
}


</div>

);

}
