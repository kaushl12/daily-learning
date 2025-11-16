import axios from 'axios';
import { atom, selector } from 'recoil';

export const notificationsAtom=atom({
    key:"notificationsAtom",
    default:100
})

export const jobAtom=atom({
    key:"jobAtom",
    default:10
})

export const networkAtom=atom({
    key:"networkAtom",
    default:5
})

export const messagesAtom=atom({
    key:"messagesAtom",
    default:0
})

export const totalNotificationSelector = selector({
    key:"totalNotificationSelector",
    get: ({get})=>{
        const networkAtomCount=get(networkAtom);
        const messageAtomCount=get(messagesAtom);
        const notificationAtomCount=get(notificationsAtom);
        const jobAtomCount=get(jobAtom);
        return networkAtomCount+messageAtomCount+notificationAtomCount+jobAtomCount
    }
})

export const postsAtom=atom({
    key:"postsAtom",
    default: selector({
        key:"postsAtomSelector",
        get:async()=>{
            const res=await axios.get("https://jsonplaceholder.typicode.com/posts/10")
            return res.data
        }
    })
    
})

export const countIdsSelector=selector({
    key:"totalIdSelector",
    
    get:({get})=>{
        const allIds=get(postsAtom);
        console.log(allIds);
        return allIds.userId+allIds.id;
    }
})