import { useRecoilState, useRecoilValue } from "recoil"
import { countIdsSelector, postsAtom } from "../store/atom"
import { useEffect } from "react"
import  axios  from 'axios';

function Asyncrecoilprac() {

    const [postCount,setPostCount]=useRecoilState(postsAtom)
    const totalIds=useRecoilValue(countIdsSelector);
    // useEffect(()=>{
    //     axios.get("https://jsonplaceholder.typicode.com/posts/2")
    //     .then(res=>{
    //         setPostCount(res.data)
    //     })
    // },[])
  return (
    <>
    <div>
        <hr />
        <h1>2. Async Data Queries</h1>
        <h2>Total Ids: {totalIds}</h2>
        <h6>User-Id:{postCount.userId}</h6>
        <h6>Id:{postCount.id}</h6>
        <h6>Title:{postCount.title}</h6>
        <h6>Body:{postCount.body}</h6>
        <hr />
    </div>
    </>
  )
}

export default Asyncrecoilprac