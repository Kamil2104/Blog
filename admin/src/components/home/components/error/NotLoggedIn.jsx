import { useNavigate } from 'react-router-dom'

import './assets/NotLoggedIn.css'

const NotLoggedIn = () => {
  const navigate = useNavigate()
  
  const handleNavigateToAuthentication = () => {
    navigate('/')
  }

  return (
    <div className="notLoggedIn">
        <p> You are not logged in! </p>
        <button onClick={handleNavigateToAuthentication}> Go to login page </button>
    </div>
  )
}

export default NotLoggedIn