"use client";

import { VideoPlayer } from "@/components/base";
import { img } from "framer-motion/client";
import { useState } from "react";


const Page = () => {
  const [playing, setPlaying] = useState(false)


  return (
     <div className="w-screen h-screen flex flex-col text-center justify-center items-center bg-white">
      <div> 
      <VideoPlayer
 
        src="https://www.w3schools.com/html/movie.mp4"
        isPlaying = {playing}
        />
        <button onClick={() => setPlaying(!playing)} className="bg-white text-black p-2">{playing ?<img className="w-10 h-10" src="../Assents/pausee.png"></img>  : <img className="w-10 h-10" src="../Assents/play.png"></img> }</button>
        
      </div>
     </div>

  );
};

export default Page;
