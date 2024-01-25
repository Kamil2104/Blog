import { useState, useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

import { isEmpty } from '../validation/isEmpty'

import '../assets/Form.css'

const Form = () => {
    const [showPassword, setShowPassword] = useState(false)

    const loginRef = useRef("")
    const passwordRef = useRef("")

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    const handleLogin = () => {
        const values = {
            login: loginRef.current.value,
            password: passwordRef.current.value
        }
        
        axios.post('http://localhost:3001/login', values)
            .then(res => {
                if(res.data === "Success") {
                    // Navigate
                } else if (res.data === "Fail") {
                    // Incorrect login or password
                } else {
                    alert("Something went wrong with our servers. Try again later.")
                }
            })
            .catch(err => console.log(err))
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
                ref={loginRef}
            />
            <div className="inputPassword">
                <input 
                    type={showPassword ? "text" : "password"}
                    spellCheck="false"
                    autoComplete="false"
                    placeholder="Password:"
                    ref={passwordRef} 
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className='eyeIcon'
                />
            </div>
        </div>
        <div className="button">
            <button onClick={handleLogin}>
                Log in
            </button>
        </div>
    </div>
  )
}

export default Form