import React from "react";
import {useEditor,EditorContent} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function RichEditor({value,onChange}){

const editor=useEditor({

extensions:[
StarterKit
],

content:value||"",

onUpdate({editor}){

onChange(editor.getHTML());

}

});


return(

<div>

<div style={{
display:"flex",
gap:"10px",
marginBottom:"10px"
}}>

<button onClick={()=>editor.chain().focus().toggleBold().run()}>
Bold
</button>

<button onClick={()=>editor.chain().focus().toggleItalic().run()}>
Italic
</button>

<button onClick={()=>editor.chain().focus().toggleHeading({level:2}).run()}>
Heading
</button>

<button onClick={()=>editor.chain().focus().toggleBulletList().run()}>
List
</button>

</div>


<div style={{
border:"1px solid #ddd",
padding:"15px",
borderRadius:"8px",
minHeight:"200px"
}}>

<EditorContent editor={editor}/>

</div>


</div>

);

}
