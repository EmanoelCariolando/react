"use client";
import { useState } from "react";
import {firstName} from "@/types/typeg";
import {lastName} from "@/types/typeg";
 
const Page = () => {
    const [count, setCount] = useState("");
    const [countWo, setCountWo] = useState("");

    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col ">

       <input type="text" placeholder="Name" 
        onChange={e => setCount (e.target.value)}
        className="bg-gray-400 m-2 rounded-md text-black p-2"
       />
     
       <input type="text"
        placeholder="Last Name" 
        className="bg-gray-400 m-2 rounded-md text-black p-2"
        onChange={e => setCountWo (e.target.value)}
       />

       <p className="flex justify-center items-center flex-col"> Your Name: <p className="text-blue-400">{`${count} ${countWo}`}</p> </p>

     </div>

    );
}

export default Page;
