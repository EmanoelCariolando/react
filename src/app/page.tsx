"use client";

import { useState } from "react";
import { allQuestions } from "@/data/people";
import { QuestionItem } from "@/components/base";
import { Resultados } from "@/components/resulta";


const Page = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answersA, setAnswers] = useState<number[]>([])
  const [results, showResults] = useState(false)

  const loadNextQuestion = () => {
   if(allQuestions[currentQuestion + 1])
    setCurrentQuestion(currentQuestion + 1)
  else {
    showResults(true)
  }
  }


  const handle = (answer: number) => {
    setAnswers([...answersA, answer]);
    loadNextQuestion()
  }
  
  const title = "🎮 Gamer Quiz"

  return (
     <div className=" w-full h-screen flex items-center justify-center bg-gray-600">
        <div className="bg-white text-black rounded-md shadow shadow-black w-full max-w-xl">
          <h1 className="m-2 text-2xl font-bold">{title}</h1>
  
          <div className="text-center p-4 border border-t border-gray-800 rounded-md m-2 hover:text-black">
            {!results &&
            <QuestionItem 
              question={allQuestions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handle}
            />
            }
            { results &&
              <Resultados questions={allQuestions} answers={answersA} />
            }
          </div>
          <div className="flex justify-center items-center">
          { !results &&
             <div className="text-center text-xs mt-5 mb-2 font-bold"> {currentQuestion + 1} questions de {allQuestions.length}</div>
          }  
          { results &&
             <div className="text-white bg-blue-600 rounded-2xl p-2 m-5 font-bold text-center cursor-pointer ">Restart</div>
          }  
          </div>
        </div>
    </div>
  );
};

export default Page;
