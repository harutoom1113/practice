export default function LikeButton({count,setCount}:{ count: number; setCount: (n: number) => void }) {
    const handleClick=()=>{
        setCount(count+1);
    }
    
    return <span className="likeButton" onClick={handleClick}>♥ {count}</span>;
    }