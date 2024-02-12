import { useState, useRef } from "react"

import { handleChangesOnInputFields } from "../functions/inputFieldsHandler"

import noImageAvailable from '../assets/NoImageAvailable.png'

const Form = () => {
  const [isPhotoSelected, setIsPhotoSelected] = useState(false)
  const [selectedBlogPhoto, setSelectedBlogPhoto] = useState(null) 

  const blogPhotoRef = useRef(null)

  const handleBlogPhotoButtonClick = () => {
    if (blogPhotoRef.current) {
        blogPhotoRef.current.click()
    }
  }

  const handleDisplayingBlogPhoto = (event) => {
    const selectedPhoto = event.target.files[0]

    if (selectedPhoto) {
        setIsPhotoSelected(true)
        setSelectedBlogPhoto(selectedPhoto)
    } else {
        setIsPhotoSelected(false)
        setSelectedBlogPhoto(null)
    }
  }

  const handleDeletingBlogPhoto = () => {
    setIsPhotoSelected(false)
    setSelectedBlogPhoto(null)
  }

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
                    <img 
                        src={isPhotoSelected ? URL.createObjectURL(selectedBlogPhoto): noImageAvailable} 
                        alt="No image available" 
                    />
                    <section className="blogPhotoButtons">
                        <button 
                            type="button"
                            onClick={handleBlogPhotoButtonClick}
                        > Choose </button>
                        <button 
                            onClick={handleDeletingBlogPhoto}
                        > Delete </button>
                    </section>
                    <input 
                        type="file" 
                        id="blogPhoto"
                        accept="image/png, image/jpg, image/jpeg"
                        style={{ display: "none" }}
                        ref={blogPhotoRef}
                        onChange={handleDisplayingBlogPhoto}
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