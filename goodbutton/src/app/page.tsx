"use client"
import { Fragment, useState } from "react";

export default function Home() {
  const [count,setCount]=useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <LikeButton count={count} setCount={setCount}/>
      <CleanButton setCount={setCount}/>
    </div>
  );
}


function LikeButton({count,setCount}:{ count: number; setCount: (n: number) => void }) {
  const handleClick=()=>{
    setCount(count+1);
  }

  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}

function CleanButton({setCount}:{setCount:(n:number)=>void}){
  const handleCleanClick=()=>{
    setCount(0);
  }
  return <span className="bg-sky-500 text-white rounded-lg cursor-pointer mx-5 px-3" onClick={handleCleanClick}>リセット</span>
}