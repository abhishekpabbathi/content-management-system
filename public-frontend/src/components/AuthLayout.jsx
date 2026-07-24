import React from "react";
import {Link} from "react-router-dom";

export default function AuthLayout({title,subtitle,children}){

return(

<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black flex">

<div className="hidden lg:flex w-1/2 p-16 flex-col justify-between bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white">

<div>

<div className="w-16 h-16 rounded-2xl bg-white text-blue-700 flex items-center justify-center text-2xl font-bold mb-8">
CMS
</div>

<h1 className="text-5xl font-black leading-tight">
Enterprise
<br/>
Content
<br/>
Management
</h1>

<p className="mt-8 text-blue-100 text-lg leading-8 max-w-md">
Manage content, users and publishing from one secure platform built with the MERN stack.
</p>

</div>

<div className="grid grid-cols-2 gap-5">

<div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
<h2 className="text-3xl font-bold">45K+</h2>
<p className="text-blue-100 mt-2">
Monthly Visitors
</p>
</div>

<div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
<h2 className="text-3xl font-bold">8.4K</h2>
<p className="text-blue-100 mt-2">
Active Users
</p>
</div>

</div>

</div>

<div className="flex-1 flex items-center justify-center px-6 py-12">

<div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl p-10">

<Link
to="/"
className="text-blue-400 hover:text-blue-300 text-sm"
>
← Back to Home
</Link>

<h1 className="text-4xl font-bold text-white mt-6">
{title}
</h1>

<p className="text-slate-400 mt-2 mb-8">
{subtitle}
</p>

{children}

</div>

</div>

</div>

);

}
