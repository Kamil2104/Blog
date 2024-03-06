import { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"

import { handleChangesOnInputFields } from "../functions/inputFieldsHandler"
import { setDefaultBorder } from "../functions/setDefaultBorderColorHandler"
import { isBlogReadyToBeAdded } from "../validation/isReadyForPosting"

import noImageAvailable from '../assets/NoImageAvailable.png'
import uploadingImage from '../assets/UploadingImage.jpg'

import PropTypes from 'prop-types'

import axios from 'axios'

const EditBlogForm = ({editedBlogName}) => {
  const navigate = useNavigate()

  const [descriptionLength, setDescriptionLength] = useState(0)

  const [isPhotoSelected, setIsPhotoSelected] = useState(undefined)
  const [selectedBlogPhoto, setSelectedBlogPhoto] = useState(null) 

  const [editBlogValues, setEditBlogValues] = useState()

  const blogNameRef = useRef("")
  const blogDescriptionRef = useRef("")
  const blogPhotoRef = useRef(null)
  const blogPhotoButtonChooseRef = useRef()

  useEffect(() => {
    const values = {
      name: Object.values(editedBlogName)
    }

    axios.post('http://localhost:3001/displayBlogToEdit', values)
    .then(res => {
      if (res.data === "Error") {
        alert("Something went wrong with our servers. Try again later.")
      } else {
        setEditBlogValues(res.data)
      }
    })
    .catch(err => console.log(err))

  }, [editedBlogName])

  useEffect(() => {
    if (editBlogValues) {   
      setDescriptionLength(editBlogValues[0].description.length)

      const buffer = editBlogValues[0].photo.data;
      const byteArray = new Uint8Array(buffer);
      const blob = new Blob([byteArray], { type: 'image/png' });

      setSelectedBlogPhoto(blob)
      setIsPhotoSelected(true)

    }
  }, [editBlogValues])

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

  const handleUpdatingBlog = () => {
    if (isBlogReadyToBeAdded(
        blogNameRef.current.value, 
        blogNameRef.current.id, 
        blogDescriptionRef.current.value, 
        blogDescriptionRef.current.id,
        selectedBlogPhoto,
        blogPhotoButtonChooseRef.current.id)) 
        {
            const file = new File([selectedBlogPhoto], 'blogPhoto.jpg', { type: 'image/jpeg' });

            const values = new FormData();
            values.append('description', blogDescriptionRef.current.value);
            values.append('photo', file);
            values.append('name', editBlogValues[0].name)

            axios.post('http://localhost:3001/updateBlog', values)
            .then(res => {
              if (res.data === "Success") {
                navigate('/editBlogSuccessAnimation')
              } else {
                alert("Something went wrong with our servers. Try again later.")
              }
            })
            .catch(err => console.log(err))
    }
  }

    return (
    <div className='editBlogForm'>
        <section className="upperPanel">
            <section className="leftPanel">
                <h1> Edit blog </h1>                
                <section className="blogNameContainer">
                    <label 
                        htmlFor="blogName"
                        id="labelName"
                    > Name: </label>
                    <input 
                        type="text"
                        id="blogName"
                        readOnly={true}
                        value={editBlogValues ? editBlogValues[0].name : ''}
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
                        maxLength={1000}
                        defaultValue={editBlogValues ? editBlogValues[0].description : ''}
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
                        src={isPhotoSelected === true ? URL.createObjectURL(selectedBlogPhoto) : isPhotoSelected === false ? noImageAvailable : uploadingImage} 
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
                      onClick={handleUpdatingBlog}
                  > Save </button>
              </section>
          </section>
    </div>
  )
}

EditBlogForm.propTypes = {
    editedBlogName: PropTypes.object.isRequired
}

export default EditBlogForm