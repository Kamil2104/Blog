import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons'

import { isEmpty } from '../validation/isEmpty'
import { showParagraph, hideParagraph } from '../functions/errorParagraphsHandler' 
import { addIsEmptyErrorStyle, deleteIsEmptyErrorStyle } from '../functions/borderErrorStyleHandler'

import axios from 'axios'

import '../assets/Form.css'

const Form = () => {
    const [loginValue, setLoginValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const [loginErrorValue, setLoginErrorValue] = useState('Error')
    const [passwordErrorValue, setPasswordErrorValue] = useState('Error')

    const [showPassword, setShowPassword] = useState(false)
    const [isLogged, setIsLogged] = useState(null)

    const [icon, setIcon] = useState(faLock)

    const loginRef = useRef("")
    const passwordRef = useRef("")

    const loginErrorParagraphRef = useRef("")
    const passwordErrorParagraphRef = useRef("")

    const navigate = useNavigate()

    let lockIconClass = isLogged ? 'lockIcon rotate' : 'lockIcon';

    useEffect(() => {
        document.title = "Blog - log in"
    }, [])

    useEffect(() => {
        if (!isEmpty(loginValue)) {
            deleteIsEmptyErrorStyle(loginRef.current.id)
            hideParagraph(loginErrorParagraphRef.current.id)
        }
    }, [loginValue])

    useEffect(() => {
        if (!isEmpty(passwordValue)) {
            deleteIsEmptyErrorStyle(passwordRef.current.id)
            hideParagraph(passwordErrorParagraphRef.current.id)
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
        if (isEmpty(loginValue) && isEmpty(passwordValue)) {
            addIsEmptyErrorStyle(loginRef.current.id)
            addIsEmptyErrorStyle(passwordRef.current.id)

            setLoginErrorValue("Enter your login.")
            setPasswordErrorValue("Enter your password.")

            showParagraph(loginErrorParagraphRef.current.id)
            showParagraph(passwordErrorParagraphRef.current.id)

            return 0;
        }

        if (isEmpty(loginValue)) {
            addIsEmptyErrorStyle(loginRef.current.id)
            
            setLoginErrorValue("Enter your login.")
            showParagraph(loginErrorParagraphRef.current.id)

            return 0;
        }

        if (isEmpty(passwordValue)) {
            addIsEmptyErrorStyle(passwordRef.current.id)

            setPasswordErrorValue("Enter your password.")
            showParagraph(passwordErrorParagraphRef.current.id)

            return 0;
        }

        const values = {
            login: loginValue,
            password: passwordValue
        }
        
        axios.post('http://localhost:3002/login', values)
            .then(res => {
                if (res.data === "Success") {
                    setIsLogged(true)
                    
                    setTimeout(() => {
                        setIcon(faLockOpen)
                    }, 1000)

                    setTimeout(() => {
                        navigate('/adminPanel')
                }, 3500)
                } else if (res.data === "Invalid login") {
                    addIsEmptyErrorStyle(loginRef.current.id)

                    setLoginErrorValue("Invalid login.")
                    showParagraph(loginErrorParagraphRef.current.id)
                } else if (res.data === "Invalid password") {
                    addIsEmptyErrorStyle(passwordRef.current.id)

                    setPasswordErrorValue("Invalid password.")
                    showParagraph(passwordErrorParagraphRef.current.id)
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
                icon={icon}
                className={lockIconClass}
            />
        </header>
        <div className="inputs">
            <input 
                id="login"
                type="text"
                spellCheck="false" 
                autoComplete="off"
                placeholder="Username:"
                onChange={handleLoginChange}
                ref={loginRef}
            />
            <p 
                id="loginErrorParagraph"
                ref={loginErrorParagraphRef}
            > {loginErrorValue} </p>
            <div className="inputPassword">
                <input 
                    id="password"
                    type={showPassword ? "text" : "password"}
                    spellCheck="false"
                    autoComplete="off"
                    placeholder="Password:"
                    ref={passwordRef} 
                    onChange={handlePasswordChange}
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    className='eyeIcon'
                />
                <p 
                    id="passwordErrorParagraph"
                    ref={passwordErrorParagraphRef}
                > {passwordErrorValue} </p>
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