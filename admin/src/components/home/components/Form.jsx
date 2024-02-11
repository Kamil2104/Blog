const Form = () => {
  return (
    <>
        <label htmlFor="blogName"> Name: </label>
        <input 
            type="text"
            name="blogName"
            id="blogName"
        />

        <label htmlFor="blogDescription"> Description: </label>
        <textarea 
            name="blogDescription" 
            id="blogDescription" 
            cols="30" 
            rows="10" 
        />

        <label htmlFor=""> Photo: </label>
        <input 
            type="file"
            accept=".png, .jpg, .jpeg"
            name="blogPhoto"
            id="blogPhoto"
        />

        <button> Add </button>
    </>
  )
}

export default Form