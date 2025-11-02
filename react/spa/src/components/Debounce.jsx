import React, { useRef } from 'react'
function useDebounce(originalFn){
    const clock=useRef()

    const fn=()=>{
        clearTimeout(clock.current)
        clock.current=setTimeout(originalFn,250)
    }
    return fn
}

function Debounce() {
    function sendDataToBackend(){
        fetch('api.amazon.com/search/')
    }
    const search=useDebounce(sendDataToBackend)
  return (
    <div>
        <input type="text" placeholder='Enter Value' onChange={search} />
    </div>
  )
}

export default Debounce