import { handleChangesOnInputFields } from "../functions/inputFieldsHandler"

import noImageAvailable from '../assets/NoImageAvailable.png'

const Form = () => {
  return (
    <>
        <div className="addBlogForm">
            <section className="leftPanel">
                <h1> Add new blog </h1>
                <section className="blogNameContainer">
                    <label 
                        htmlFor="blogName"
                        id="labelName"
                    > Name: </label>
                    <input 
                        type="text"
                        id="blogName"
                        placeholder="Name:"
                        autoComplete="off"
                        onChange={() => handleChangesOnInputFields("blogName", "labelName")}
                    />
                </section>
                <section className="blogDescriptionContainer">
                    <label 
                        htmlFor="blogDescription"
                        id="labelDescription"
                    > Description: </label>
                    <textarea 
                        id="blogDescription" 
                        placeholder="Description:"
                        onChange={() => handleChangesOnInputFields("blogDescription", "labelDescription")}
                    />
                </section>
            </section>
            <section className="rightPanel">
                <section className="blogPhotoContainer">
                    <img src={noImageAvailable} alt="No image available" />
                    <button 
                        type="button"
                    > Submit </button>
                    <input 
                        type="file" 
                        id="blogPhoto"
                        accept="image/png, image/jpg, image/jpeg"
                        style={{ display: "none" }}
                    />
                </section>
            </section>
        </div>
        <div className="submitButton">
            <button> Add </button>
        </div>
    </>
  )
}

export default Form