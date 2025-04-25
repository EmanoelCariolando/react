import { Questions } from "@/types/typeg";
import { useState } from "react";

 type Props = {
  question: Questions;
  count: number;
  onAnswer: (answer: number) => void; //onAnswer(0)
 } 

 export const QuestionItem = ({question,count,onAnswer}: Props) => {
  const [selectedAnswer, setSelectedAnswer] = useState< number | null >(null); //selectedAnswer(null)

   const checkQuestion = (key: number) => { 
    if (selectedAnswer === null) {
      setSelectedAnswer(key);

      setTimeout((  ) => {
        setSelectedAnswer(null);
        onAnswer(key);
      }, 400)
    }
     
   }
  return (
     <div>
        <h1 className="font-bold ">{count}. {question.question}</h1>
        <div>
          {question.options.map((i, respo) => (

            <div
              key={respo}
              onClick={() => {checkQuestion(respo)}}
              className={`text-center p-2 border border-gray-400 rounded-md m-2 hover:text-black
              ${selectedAnswer !== null ? "cursor-auto hover:opacity-100" : " cursor-pointer hover:opacity-60 "}
              ${selectedAnswer !== null &&  selectedAnswer === question.aswer && selectedAnswer === respo && "  border-2 border-green-600 bg-green-100"}
              ${selectedAnswer !== null &&  selectedAnswer !== question.aswer && selectedAnswer === respo && " bg-red-500 "}
  

              `}>
                {i}</div>

              


          ))}
        </div>

     </div>
  )
 }

