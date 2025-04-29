"use client";


import { Square } from "@/components/base";
import { useState } from "react";


const Page = () => {
  const [show,setShow] = useState(false)


  return (
     <div className="w-screen h-screen flex flex-col text-center justify-center items-center bg-white">
      <div> 
        <button onClick={() => setShow(!show)} className="w-20 h-10 bg-white text-black font-bold p-2 border border-black">Show</button>

        {show && <Square/>}
        
      </div>
     </div>

  );
};

export default Page;
