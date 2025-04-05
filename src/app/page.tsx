"use client";
import { useState } from "react";
import {completName} from "@/types/typeg";

 
const Page = () => {
    const [allName, setCount] = useState <completName>({name: "", lastName: ""});


    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col ">

       <input type="text" placeholder="Name" 
        onChange={e => setCount ({ ...allName, name: e.target.value})}
        className="bg-gray-400 m-2 rounded-md text-black p-2"
       />
     
       <input type="text"
        placeholder="Last Name" 
        className="bg-gray-400 m-2 rounded-md text-black p-2"
        onChange={e => setCount ({ ...allName, lastName: e.target.value})}
       />

       <p className="flex justify-center items-center flex-col"> Your Name: <p className="text-blue-400">{allName.name} {allName.lastName}</p> </p>

     </div>

    );
}

export default Page;
