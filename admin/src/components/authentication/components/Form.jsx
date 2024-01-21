const Form = () => {
  return (
    <div className="form">
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