import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount((count) => count + 1);
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount,
//   };
// }

function CustomHook() {
  // const {count, increaseCount} = useCounter();
  const [page, setPage] = useState(1);

  //const {post}=usePost()
  const { data,loading } = useFetch(`https://jsonplaceholder.typicode.com/posts/${page}`);

  function nextPost(){
   setPage((prev) => prev + 1);
 
}

if(loading){
    return <div>
        Loading..............
    </div>
}
  return (
    <div>
      <hr />
     
      <button onClick={nextPost}> Next</button>
      <h1> {JSON.stringify(data)}</h1>
      <hr />










      {/* <hr />
     
      <h1> title: {post.title}</h1>
      <hr />
      <h3>body: {post.body}</h3>
      <hr /> */}
    </div>
  );
}

export default CustomHook;
