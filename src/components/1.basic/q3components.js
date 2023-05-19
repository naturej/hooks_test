import { useEffect } from "react";

function Q3components({ setCount }) {
  useEffect(()=>{
    // 2초마다 1씩 증가
    let interval = setInterval(() => { setCount((prev) => prev + 1) }, 2000);
    //clean up
    return () => { 
      clearInterval(interval);
      setCount(0);
    }
  },[]);

  return <div> 🏃‍♂️ 줄넘기 ... ing </div>;
}
export default Q3components;
