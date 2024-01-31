import { useNavigate } from 'react-router-dom'

import Loader from '../Loader'

import './assets/NotLoggedIn.css'
import { useEffect } from 'react'

const NotLoggedIn = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/')
    }, 3000)

    return () => clearTimeout(timeout)
  }, [navigate])

  return (
    <div className="notLoggedIn">
        <Loader />
    </div>
  )
}

export default NotLoggedIn