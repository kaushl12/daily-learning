import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Maincontent from './components/Maincontent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex h-screen">
        <Sidebar/>
        <Maincontent/>
      </div>
    </>
  )
}

export default App
