import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"

import { handleChangesOnInputFields } from "../functions/inputFieldsHandler"
import { setDefaultBorder } from "../functions/setDefaultBorderColorHandler"
import { isBlogReadyToBeAdded } from "../validation/isReadyForPosting"
import { showBlogNameErrorParagraph } from "../functions/blogNameErrorParagraphHandler"
import { getDate } from "../functions/getDateHandler"

import noImageAvailable from '../assets/NoImageAvailable.png'

import axios from "axios"

const CreateBlogForm = () => {
  const navigate = useNavigate()

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
            values.append('date', getDate());
            values.append('name', blogNameRef.current.value)

            axios.post('http://localhost:3002/addBlog', values)
            .then(res => {
                if (res.data === "Success") {
                    navigate('/createBlogSuccessAnimation')
                } else if (res.data === "Error (name)") {
                    showBlogNameErrorParagraph("blogNameErrorParagraph")
                } else {
                    alert("Something went wrong with our servers. Try again later.")
                }
            })
            .catch(err => console.log(err))
    }
  }

  return (
    <>
        <div className="addBlogForm">
            <section className="upperPanel">
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
                                handleChangesOnInputFields("blogName", "labelName", "blogNameErrorParagraph");
                                handleNameFieldLength();
                                setDefaultBorder(blogNameRef.current.id);}
                            }
                        />
                        <section className="blogNameParagraphsContainer">
                            <p
                            id="blogNameErrorParagraph"      
                            > Blog with this name already exists </p>
                            <p
                                id="paragraphNameLength"
                            > {nameLength} / 100 </p>
                        </section>
                    </section>
                    <section className="blogDescriptionContainer">
                        <label 
                            htmlFor="blogDescription"
                            id="labelDescription"
                        > Description: </label>
                        <textarea 
                            id="blogDescription" 
                            placeholder="Description:"
                            maxLength={5000}
                            ref={blogDescriptionRef}
                            onChange={() => {
                                handleChangesOnInputFields("blogDescription", "labelDescription");
                                handleDescriptionFieldLength();
                                setDefaultBorder(blogDescriptionRef.current.id)}
                            }
                        />
                        <p
                            id="paragraphDescriptionLength"
                        > {descriptionLength} / 5000 </p>
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
            </section>
            <section className="lowerPanel">
                <section className="submitButton">
                    <button
                        id="buttonSubmit"
                        onClick={handleAddingBlog}
                    > Add </button>
                </section>
            </section>
        </div>
    </>
  )
}

export default CreateBlogForm