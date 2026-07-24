import mongoose from "mongoose";

const blockSchema = new mongoose.Schema({
type:{
type:String,
enum:[
"heading",
"paragraph",
"list",
"table",
"code",
"math"
],
required:true
},
data:{
type:mongoose.Schema.Types.Mixed,
required:true
}
});


const contentSchema = new mongoose.Schema(
{
title:{
type:String,
required:true,
trim:true
},

description:{
type:String,
required:true,
trim:true
},

body:{
type:String,
default:""
},

blocks:{
type:Array,
default:[]
},

blocks:{
type:[blockSchema],
default:[]
},

category:{
type:String,
enum:[
"Overview",
"Articles",
"Pages",
"Resources"
],
default:"Articles"
},

status:{
type:String,
enum:[
"Draft",
"Published"
],
default:"Draft"
},

author:{
type:String,
default:"Admin"
}

},
{
timestamps:true
}
);

export default mongoose.model("Content",contentSchema);
