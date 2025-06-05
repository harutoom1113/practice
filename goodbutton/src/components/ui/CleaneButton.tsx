export default function CleanButton({setCount}:{setCount:(n:number)=>void}){
    const handleCleanClick=()=>{
        setCount(0);
    }
    return <span className="bg-sky-500 text-white rounded-lg cursor-pointer mx-5 px-3" onClick={handleCleanClick}>リセット</span>
    }