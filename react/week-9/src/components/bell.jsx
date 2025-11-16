import React, { useEffect } from "react";
import { useState } from "react";
export function Bell() {
  const [count, setCount] = useState(1);
    function increaseCount(){
        setCount(count+1)
    }
    
    useEffect(()=>{

        console.log("ABove set Interval");
        const interval = setInterval(()=> {
             setCount((count) => count+1)
            
        }, 1000);
         return () => {
    console.log("Im unmounted")
  }
    },[])
    
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "red",
            borderRadius: 20,
            width: 20,
            height: 20,
            paddingLeft: 11,
            paddingTop: 3,
            position:"relative",
            left:17,
            top:9
          }}
        >
          {count}
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZFbmz1dsMQ1sxbzxIcAveTpbx8ztZnAlXg&s"
        alt=""
        width={40}
      />
      <button onClick={increaseCount} style={{margin:10, borderColor:"#000000"}}>Add </button>
    </div>
  );
}


