import { useState, useRef } from "react"

import { handleChangesOnInputFields } from "../functions/inputFieldsHandler"
import { setDefaultBorder } from "../functions/setDefaultBorderColorHandler"
import { isBlogReadyToBeAdded } from "../validation/isReadyForPosting"

import noImageAvailable from '../assets/NoImageAvailable.png'
import axios from "axios"

const Form = () => {
  const [nameLength, setNameLength] = useState(0)
  const [descriptionLength, setDescriptionLength] = useState(0)

  const [isPhotoSelected, setIsPhotoSelected] = useState(false)
  const [selectedBlogPhoto, setSelectedBlogPhoto] = useState(null) 

  const blogNameRef = useRef("")
  const blogDescriptionRef = useRef("")
  const blogPhotoRef = useRef(null)
  const blogPhotoButtonChooseRef = useRef()

  const handleNameFieldLength = () => {
    const nameValue = blogNameRef.current.value
    const nameLength = nameValue.length

    setNameLength(nameLength)
  }

  const handleDescriptionFieldLength = () => {
    const descriptionValue = blogDescriptionRef.current.value
    const descriptionLength = descriptionValue.length
    
    setDescriptionLength(descriptionLength)
  }

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
        
        setDefaultBorder(blogPhotoButtonChooseRef.current.id)
    } else {
        setIsPhotoSelected(false)
        setSelectedBlogPhoto(null)
    }
  }

  const handleDeletingBlogPhoto = () => {
    setIsPhotoSelected(false)
    setSelectedBlogPhoto(null)

    // When the user deletes a file, we set the value of the "file" field to null, to allow it to select the same file again safely
    if (blogPhotoRef.current) {
        blogPhotoRef.current.value = null;
    }
  }

  const handleAddingBlog = () => {
    if (isBlogReadyToBeAdded(
        blogNameRef.current.value, 
        blogNameRef.current.id, 
        blogDescriptionRef.current.value, 
        blogDescriptionRef.current.id,
        selectedBlogPhoto,
        blogPhotoButtonChooseRef.current.id)) 
        {
            const values = new FormData();
            values.append('description', blogDescriptionRef.current.value);
            values.append('photo', selectedBlogPhoto);
            values.append('name', blogNameRef.current.value);

            axios.post('http://localhost:3001/addBlog', values)
            .then(res => {
                if (res.data === "Success") {
                    // TODO: MAKE A TICK ANIMATION
                    console.log("Success")
                } else if (res.data === "Error (name)") {
                    // TODO: Blog with this name already exists
                    console.log("Error (name)")
                } else {
                    // TODO: Something went wrong with adding a blog
                    console.log("Error")
                }
            })
            .catch(err => console.log(err))

    }
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
                        maxLength={100}
                        ref={blogNameRef}
                        onChange={() => {
                            handleChangesOnInputFields("blogName", "labelName");
                            handleNameFieldLength();
                            setDefaultBorder(blogNameRef.current.id);}
                        }
                    />
                    <p
                        id="paragraphNameLength"
                    > {nameLength} / 100 </p>
                </section>
                <section className="blogDescriptionContainer">
                    <label 
                        htmlFor="blogDescription"
                        id="labelDescription"
                    > Description: </label>
                    <textarea 
                        id="blogDescription" 
                        placeholder="Description:"
                        maxLength={1000}
                        ref={blogDescriptionRef}
                        onChange={() => {
                            handleChangesOnInputFields("blogDescription", "labelDescription");
                            handleDescriptionFieldLength();
                            setDefaultBorder(blogDescriptionRef.current.id)}
                        }
                    />
                    <p
                        id="paragraphDescriptionLength"
                    > {descriptionLength} / 1000 </p>
                </section>
            </section>
            <section className="rightPanel">
                <section className="blogPhotoContainer">
                    <img 
                        id="blogPhoto"
                        alt="No image available" 
                        src={isPhotoSelected ? URL.createObjectURL(selectedBlogPhoto): noImageAvailable} 
                    />
                    <section className="blogPhotoButtons">
                        <button 
                            type="button"
                            id="blogPhotoButtonChoose"
                            ref={blogPhotoButtonChooseRef}
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
            <button
                id="buttonSubmit"
                onClick={handleAddingBlog}
            > Add </button>
        </div>
    </>
  )
}

export default Form