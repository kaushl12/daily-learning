import { atom, atomFamily, selectorFamily } from "recoil";
import { Todos } from "../todos";
import axios from "axios";

export const todosAtomFamily=atomFamily({
    key:"todosAtomFamily",
    default:id=>{
        return Todos.find(x=>x.id==id)
    }
})

// Atom-Family but calling Todos api for gicven Todo Id.

export const todoSelectorAtomFamily=atomFamily({
    key:"todoSelectorAtomFamily",
    default:selectorFamily({
        key:"todoSelctorFamilly",
        get:  (id) => async ({get}) =>{            
             const res=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return res.data
           },
    })
})