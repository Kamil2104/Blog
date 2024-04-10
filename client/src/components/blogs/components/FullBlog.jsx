import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' 

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import Loader from '../../loader/components/Loader'
import uploadingImage from '../assets/uploadingImage.jpg'

import useFetchBlog from '../hooks/useFetchBlog'

import PropTypes from "prop-types"
import moment from 'moment'

import '../assets/FullBlog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FullBlog = () => {
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

  return (
    <section className='fullBlog'>
      { isLoading ? (
          <Loader />
      ) : (
        <>
            <header>
                <section className='blogNameContainer'>
                    <h1> {blog[0]?.name} </h1>
                </section>
                <section className='iconContainer'>
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className='backIcon'
                    />
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
              <footer>
                  {moment(blog[0]?.date).format("DD-MM-YYYY, HH:mm")}
              </footer>
          </>
      )}
    </section>
  )
}

FullBlog.propTypes = {
  blogName: PropTypes.string
}

export default FullBlog