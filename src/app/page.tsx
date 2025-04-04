"use client";
import { FormEvent, useState } from "react";

const Page = () => {
  const [valor, setValor] = useState(0);
  const click = () => {
    setValor(valor + 2);
    setValor(c => c + 2);
  }
  
 

    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col ">
        <div>{valor}</div>
        <div onClick={click} className="p-2 bg-blue-500 text-white">+2</div>

     </div>

    );
}

export default Page;
