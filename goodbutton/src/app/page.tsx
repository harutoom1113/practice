"use client"
import CleanButton from "@/components/ui/CleaneButton";
import LikeButton from "@/components/ui/LikeButton";
import { useState } from "react";

export default function Home() {
  const [count,setCount]=useState(0);

  return (
    <div className="flex justify-center items-center h-screen">
      <LikeButton count={count} setCount={setCount}/>
      <CleanButton setCount={setCount}/>
    </div>
  );
}




