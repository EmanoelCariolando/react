import { Questions } from "@/types/typeg"
import { div } from "framer-motion/client"

 type Props = {
   questions:Questions[],
   answers:number[]
 }


export const Resultados  = ({questions,answers}:Props) => {
  return(
    <div className="font-bold text-4xl"> 
       {questions.map((item,key) => (
         <div key={key} className="flex text-2xl flex-col justify-center items-center m-5"
         >
          <div className="font-bold text-lg">Question {key + 1} - {item.question}</div>
          <span className="text-white text-lg ">{item.aswer === answers[key] ? <div className="bg-green-500 w-20 p-1">acertou</div> : <div className="bg-red-500 p-1">errou</div>}</span>
          <div> {item.aswer === answers[key] ? ``: `${item.options[item.aswer]}`}</div>
         </div>
       ))}
    </div>
  )
 }