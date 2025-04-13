"use client";
import { useState } from "react";
import {toDo} from "@/types/typeg";

 
const Page = () => {
    const [item, setLabel] = useState('');
    const [yellow,setYellow] = useState(true);
    const [works, setCount] = useState<toDo[]>([ 
    ]);
 


    const close = (id: number) => {
      setCount((works.filter( item => item.id !== id)));
      }

    const hadleClick = () => {
      if(item === '') return;
      setCount([...works, {id: works.length + 1 ,label: item, check: false}]);
      setLabel('');

    }

    



    return (
    <div className="w-screen h-screen flex items-center justify-center flex-col ">
    <div className="flex flex-col m-2 items-center justify-center">

      
     <div className="bg-gray-700 w-full h-full flex flex-col items-center justify-center rounded-lg text-2xl p-4 ">
      <p className="m-2">Lista De Tarefas</p>
   

    <div className="flex items-center justify-center bg-gray-600 my-2  ">
      <input type="text"
       className="bg-gray-700 w-4/5 h-8 m-3 text-center text-xl "
       placeholder="Adicionar tarefa"
       value={item}
       onChange={e => setLabel(e.target.value)} />
 
     
       <button onClick={hadleClick} className="text-white font-bold m-2 ">  {item === "" ? <button className="cursor-not-allowed">+</button> : <button className="cursor-pointer">+</button>}</button>
    </div>

         {works.map((e) => (
       <div className="bg-gray-600 w-full m-2 flex items-center justify-center rounded-lg" key={e.id}>
          <li  className="w-full text-lg font-bold text-center m-1 flex items-center justify-baseline"> <div className="flex mr-5"> • {e.label} </div></li>

          <div className="flex items-center justify-center h-8 w-24 mr-4">
          <h1 onClick={() => setYellow(!yellow)} className=" text-white  ml-2 w-20 h-5 text-sm cursor-pointer">{ yellow ? <p className="bg-yellow-500">pendente</p> : <p className="bg-green-500">concluido</p>}</h1>
          <h1 key={e.id} onClick={() => close(e.id)} className="bg-red-500 text-white  ml-2 w-20 h-5 text-sm cursor-pointer">{'delete'} </h1>
          </div>

        </div>
          
    ))}

            <p className="text-sm mt-6">total de itens {works.length}</p>

      </div>
    </div>
  </div>

    );
}

export default Page;
