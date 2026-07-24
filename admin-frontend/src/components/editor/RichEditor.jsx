import React,{useEffect,useRef} from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/table";

export default function RichEditor({value,onChange}){

const editor=useRef(null);

useEffect(()=>{

if(editor.current) return;

editor.current=new EditorJS({

holder:"editorjs",

data:value || {},

tools:{
header:Header,
list:List,
table:Table
},

onChange:async()=>{

const data=await editor.current.save();

onChange(data);

}

});

return()=>{

if(editor.current){
editor.current.destroy();
editor.current=null;
}

};

},[]);


return(
<div
id="editorjs"
style={{
border:"1px solid #ddd",
borderRadius:"10px",
padding:"15px",
minHeight:"200px"
}}
></div>
);

}
