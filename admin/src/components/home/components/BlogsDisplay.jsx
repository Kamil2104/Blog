import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import PropTypes from 'prop-types'

import axios from 'axios'

import '../assets/styles/BlogsDisplay.css'

const BlogsDisplay = ({blogs, setDisplayOrEdit, setEditedBlogName}) => {

  const navigate = useNavigate()

  const editBlogHandler = (blogName) => {
    setEditedBlogName(blogName)
    setDisplayOrEdit('edit')
  }

  const deleteBlogHandler = (blogName) => {
    const values = {
      name: blogName
    }

    axios.post("http://localhost:3002/deleteBlog", values)
    .then(res => {
        if (res.data === "Success") {
          navigate('/deleteBlogSuccessAnimation')
        } else {
          alert("Something went wrong with our servers. Try again later.")
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='blogsDisplay'> 
        {blogs.map(blog => (
            <section key={blog.name} className='blog'>
                <section className='blogName'>
                    <p> {blog.name} </p>
                </section>
                <section className='blogIcons'>
                    <FontAwesomeIcon 
                      icon={faEdit}
                      className='editIcon'
                      onClick={() => editBlogHandler(blog.name)}
                    />
          
                    <FontAwesomeIcon 
                      icon={faTrashCan}
                      className='deleteIcon'
                      onClick={() => deleteBlogHandler(blog.name)}
                  />
                </section>
              </section>
          ))}
    </div>
  )
}

BlogsDisplay.propTypes = {
  blogs: PropTypes.array.isRequired,
  setDisplayOrEdit: PropTypes.func.isRequired,
  setEditedBlogName: PropTypes.func.isRequired
};

export default BlogsDisplay