import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
    const navigate=useNavigate()
    useEffect(()=>{
        const timer=setTimeout(() => {
            navigate("/")
        }, 5000);
    },[navigate])

  return (
    <div>On the Profile Routes
    </div>
  )
}

export default Profile