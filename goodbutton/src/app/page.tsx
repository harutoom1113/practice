"use client"
import { Fragment, useState } from "react";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LikeButton/>
    </div>
  );
}

function LikeButton() {
  const [count,setCount]=useState(0);
  const handleClick=()=>{
    setCount(count+1);
  }

  return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
}