"use client";
import { FormEvent, useState } from "react";

const Page = () => {
  const [value, setCount] = useState(false);

  const handleClick = () => {
    setCount(!value);
  }

  

    return (
      <div className="w-screen h-screen flex items-center justify-center flex-col ">
        <div>
          {value &&
          <div className="bg-green-500 p-2 rounded-md">Secret Area</div>
       
           }
        </div>
        <button onClick={handleClick} className="bg-blue-500 p-2 rounded-md m-2">{value ? 'ocultar' : 'Show'}</button>
     </div>
    );
}

export default Page;
