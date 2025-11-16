import React7 from 'react'

export function Card({children}) {
  return (
    <div style={{
        border : "1px solid black",
        borderRadius :"5px",
        padding:"20px",
        boxShadow: "2px 2px 2px rgba(0,0,0,0.1)",
        margin:"5px"
    }} >
        {children}
    </div>
  )
}

