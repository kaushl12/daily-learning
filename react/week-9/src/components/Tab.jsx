import React from 'react'
import { useState,useEffect } from 'react'
export function Tab() {
    const [currentTab, setCurrentTab] = useState("home")
    const [tabData, setTabData] = useState(1)
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        setLoading(true )
      fetch("https://jsonplaceholder.typicode.com/todos/"+ currentTab)
      .then(async res=>{
        const data=await res.json()
        setTabData(data)
        setLoading(false)
      })
    }, [currentTab])
    
    
  return (
    <div>
        <button onClick={function(){
            setCurrentTab(1)
        }} style={{backgroundColor: currentTab == 1? "cyan": "red"}}>Todo #1</button>
         <button onClick={function(){
            setCurrentTab(2)
        }}style={{backgroundColor: currentTab == 2? "cyan": "red"}}>Todo #2</button>
         <button onClick={function(){
            setCurrentTab(3)
        }}style={{backgroundColor: currentTab == 3? "cyan": "red"}}>Todo #3</button> 
        <button onClick={function(){
            setCurrentTab(4)
        }} style={{backgroundColor: currentTab == 4? "cyan": "red"}}>Todo #4</button>
        {loading ?"...loading" : tabData.title}
    </div>
  )
}

