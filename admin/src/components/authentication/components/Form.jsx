import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/Form.css'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Form = () => {
  return (
    <div className="form">
        <header>
            <FontAwesomeIcon 
                icon={faLock}
            />
        </header>
        <div className="inputs">
            <input 
                type="text"
                spellCheck="false" 
                autoComplete="true"
            />
            <input 
                type="password" 
                spellCheck="false"
                autoComplete="false" 
            />
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