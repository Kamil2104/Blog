import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import '../assets/Form.css'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false)

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

  return (
    <div className="form">
        <header>
            <FontAwesomeIcon 
                icon={faLock}
                className="lockIcon"
            />
        </header>
        <div className="inputs">
            <input 
                type="text"
                spellCheck="false" 
                autoComplete="true"
                placeholder="Username:"
            />
            <div className="inputPassword">
                <input 
                    type={showPassword ? "text" : "password"}
                    spellCheck="false"
                    autoComplete="false"
                    placeholder="Password:" 
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className='eyeIcon'
                    style={{width: '1.2em', height: '1.2em'}}
                />
            </div>
        </div>
        <div className="button">
            <button>
                Log in
            </button>
        </div>
    </div>
  )
}

export default Form