import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoSelectorAtomFamily } from '../store/familyatom'

function TodoSelector({id}) {

      const currentTodo=useRecoilValue(todoSelectorAtomFamily(id))
    
  return (
    <div>
        <hr />
        <h1>Atom Family</h1>
        <h3>Todos</h3>
        <div>
          <h4>User-Id={currentTodo.userId}</h4>
          <h4>Todo-Id={currentTodo.id}</h4>
          <h4>Title={currentTodo.title}</h4>
          <h4>Description={currentTodo.body}</h4>
        </div>
          {/* <UpdaterTodo/> */}
        <hr />

    
    </div>
  )
}

export default TodoSelector