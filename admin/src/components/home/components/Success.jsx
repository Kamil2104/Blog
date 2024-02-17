import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import '../assets/styles/Success.css'

const Success = () => {
  const navigate = useNavigate()
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/adminPanel')
    }, 9000)
  })

  return (
    <div className='successComponent'>
        <div className='successAnimationIcon'>
            <FontAwesomeIcon 
                icon={faCheck}
                className='checkIcon'
            />
        </div>
        <div className='successAnimationParagraph'>
            <p> Blog has been successfully added! </p>
        </div>
    </div>
  )
}

export default Success