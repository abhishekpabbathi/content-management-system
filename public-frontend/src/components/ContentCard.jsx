import React from "react";
import {Link} from "react-router-dom";

export default function ContentCard({content}){

return (

<div className="border rounded-xl p-5 shadow">

<h2 className="text-xl font-bold">
{content.title}
</h2>

<p className="mt-3">
{content.description}
</p>

<Link
className="text-blue-600 block mt-3"
to={`/content/${content._id}`}
>
Read More
</Link>

</div>

);

}
