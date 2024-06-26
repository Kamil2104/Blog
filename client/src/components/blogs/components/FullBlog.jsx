import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom' 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Loader from '../../loader/components/Loader'
import uploadingImage from '../assets/uploadingImage.jpg'

import useFetchBlog from '../hooks/useFetchBlog'

import PropTypes from "prop-types"
import moment from 'moment'

import '../assets/FullBlog.css'

const FullBlog = () => {
  const navigate = useNavigate()

  const location = useLocation()
  const blogName = location?.state?.blogName

  const { blog, isLoading } = useFetchBlog({ blogName })

  const [blogPhoto, setBlogPhoto] = useState()
  const [isBlogPhotoUploaded, setIsBlogPhotoUploaded] = useState(false)

  useEffect(() => {
    if (blog) {
      const buffer = blog[0]?.photo.data;
      const byteArray = new Uint8Array(buffer);

      const blogPhotoBLOB = new Blob([byteArray], { type: 'image/png' });

      setBlogPhoto(blogPhotoBLOB)
      setIsBlogPhotoUploaded(true)
    }
  }, [blog])

  const navigateToMainPage = () => {
    navigate("/")
  }

  return (
    <section className='fullBlog'>
      { isLoading ? (
          <Loader />
      ) : (
        <>
            <header>
              <section className='header-left'>
                <h1> {blog[0]?.name} </h1>
              </section>
              <section className='header-right'>
                <section className='header-right-top'>
                  <p> {moment(blog[0]?.date).format("DD-MM-YYYY, HH:mm")} </p>
                </section>
                <section className='header-right-bottom'>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='backIcon'
                    onClick={navigateToMainPage}
                  />
                </section>
              </section>
            </header>
          <main>
              <article>
                  <p> {blog[0]?.description} </p>
              </article>
              <aside>
                  <img src={isBlogPhotoUploaded === true ? URL.createObjectURL(blogPhoto) : uploadingImage} alt="blogPhoto" />
              </aside>
          </main>
          </>
      )}
    </section>
  )
}

FullBlog.propTypes = {
  blogName: PropTypes.string
}

export default FullBlog