import { useEffect, useState } from "react"

 export const Square = ( )=> {

    useEffect(() => {
      console.log('CONECTOU')

      return () => {
        console.log('DESCONECTED')}
      },[]);
    
  return (
   <div className="w-30 h-30 bg-amber-600 m-2 font-bold text-white ">1</div>
  )
 }
