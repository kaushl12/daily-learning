import React, { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { todosAtomFamily } from '../store/familyatom'

function Todorecoil({id}) {

  const currentTodo=useRecoilValue(todosAtomFamily(id))
  return (    
    <div>
        <hr />
        <h1>Atom Family</h1>
        <h3>Todos</h3>
        <div>
          <h4>Todo-Id={currentTodo.id}</h4>
          <h4>Title={currentTodo.title}</h4>
          <h4>Description={currentTodo.desc}</h4>
        </div>
          <UpdaterTodo/>
        <hr />

    </div>

  )
}
function UpdaterTodo(){
  const upadateTodo=useSetRecoilState(todosAtomFamily(3))
  useEffect(()=>{
    setTimeout(()=>{
      upadateTodo({
        id:"3",
        title:"New New",
        desc:"new neww"
      })
    },5000)
  },[])
  return <div></div>

  
}
export default Todorecoil