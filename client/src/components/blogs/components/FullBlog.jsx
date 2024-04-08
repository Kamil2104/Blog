import { useLocation } from 'react-router-dom' 

import PropTypes from "prop-types"

import '../assets/FullBlog.css'

const FullBlog = () => {
  const location = useLocation()
  const blogName = location?.state?.blogName

  return (
    <section className='fullBlog'>
        <h1> {blogName} </h1>
    </section>
  )
}

FullBlog.propTypes = {
  blogName: PropTypes.string
}

export default FullBlog