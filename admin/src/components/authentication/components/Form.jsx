import { useState, useRef, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'

import { isEmpty, addIsEmptyErrorStyle, deleteIsEmptyErrorStyle } from '../validation/inputsHandler'

import '../assets/Form.css'

const Form = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const loginRef = useRef("")
    const passwordRef = useRef("")

    useEffect(() => {
        if (!isEmpty(loginValue)) {
            deleteIsEmptyErrorStyle(loginRef.current.id)
        }
    }, [loginValue])

    useEffect(() => {
        if (!isEmpty(passwordValue)) {
            deleteIsEmptyErrorStyle(passwordRef.current.id)
        }
    }, [passwordValue])

    const handleLoginChange = (event) => {
        setLoginValue(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPasswordValue(event.target.value)
    }

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
    }

    // HANDLE LOGIN

    const handleLogin = () => {
        if (isEmpty(loginRef.current.value)) {
            addIsEmptyErrorStyle(loginRef.current.id)
            return 0;
        }

        if(isEmpty(passwordRef.current.value)) {
            addIsEmptyErrorStyle(passwordRef.current.id)
            return 0;
        }

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
                id="login"
                type="text"
                spellCheck="false" 
                autoComplete="true"
                placeholder="Username:"
                onChange={handleLoginChange}
                ref={loginRef}
            />
            <div className="inputPassword">
                <input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    spellCheck="false"
                    autoComplete="false"
                    placeholder="Password:"
                    ref={passwordRef} 
                    onChange={handlePasswordChange}
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