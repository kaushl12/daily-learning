import {  memo,useEffect, useState } from "react";

function MemoCount() {
  return (
    <>
      <Counter />
    </>
  );
}
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    setInterval(()=>{
        setCount(c=>c+1)
    },3000)
  },[])
  return (
    <>
      <h1>Memo-Counter</h1>
      <ViewCount count={count}/>
      <Increase />
      <br />
      <Decrease />
    </>
  );
}
const ViewCount=memo(function({count}){
console.log("View rendered");

    return (
        <div>
        
      <h2>{count}</h2>
    </div>
  );
}) 

const Increase = memo(function(){
console.log("Increase rendered");

  return (
    <div>
      <button
        onClick={() => {
        //   setCount((c) => c + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
})
const Decrease=memo(function()  {
console.log("Decrease rendered");

  return (
    <div>
      <button
        onClick={() => {
        //   setCount((c) => c - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
})

export default MemoCount;
