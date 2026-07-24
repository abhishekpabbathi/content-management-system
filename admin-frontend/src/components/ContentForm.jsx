import {useState} from "react";
import BlockEditor from "./BlockEditor";

export default function ContentForm({onCreate}){

const[form,setForm]=useState({
title:"",
description:"",
body:"",
blocks:[],
category:"Articles"
});


const submitHandler=(e)=>{

e.preventDefault();

if(!form.title||!form.description){
alert("Fill required fields");
return;
}

onCreate(form);

setForm({
title:"",
description:"",
body:"",
blocks:[],
category:"Articles"
});

};


return(

<form
onSubmit={submitHandler}
className="space-y-5"
>


<input
value={form.title}
onChange={e=>setForm({...form,title:e.target.value})}
placeholder="Content Title"
className="w-full border rounded-xl p-3"
/>


<select
value={form.category}
onChange={e=>setForm({...form,category:e.target.value})}
className="w-full border rounded-xl p-3"
>

<option>Overview</option>
<option>Articles</option>
<option>Pages</option>
<option>Resources</option>

</select>


<textarea
value={form.description}
onChange={e=>setForm({...form,description:e.target.value})}
placeholder="Short Description"
rows="3"
className="w-full border rounded-xl p-3"
/>


<textarea
value={form.body}
onChange={e=>setForm({...form,body:e.target.value})}
placeholder="Full Content"
rows="10"
className="w-full border rounded-xl p-3"
/>


<BlockEditor
blocks={form.blocks}
setBlocks={(blocks)=>setForm({...form,blocks})}
/>


<button
className="bg-blue-600 text-white px-6 py-3 rounded-xl"
>

Create Content

</button>


</form>

);

}
