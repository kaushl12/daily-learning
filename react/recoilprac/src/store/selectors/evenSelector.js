import { selector } from "recoil";
import { counterAtom } from "../counter";

export const evenSelector=selector({
    key:"evenSelector",
    get:function({ get }){
        const count=get(counterAtom)
        const isEven= (count%2==0);
        return isEven
    }
})
