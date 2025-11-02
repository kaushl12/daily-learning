import { atomFamily } from "recoil";
import { Todos } from "../todos";

export const todosAtomFamily=atomFamily({
    key:"todosAtomFamily",
    default:id=>{
        return Todos.find(x=>x.id==id)
    }
})