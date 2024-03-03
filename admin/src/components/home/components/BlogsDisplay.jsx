import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import axios from 'axios'

import '../assets/styles/BlogsDisplay.css'

const BlogsDisplay = (blogs) => {

  const deleteBlogHandler = (blogName) => {
    const values = {
      name: blogName
    }

    axios.post("http://localhost:3001/deleteBlog", values)
    .then(res => {
        if (res.data === "Success") {
          window.location.reload()
        } else {
          alert("Something went wrong with our servers. Try again later.")
        }
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='blogsDisplay'> 
        {blogs.blogs.map(blog => (
            <section key={blog.name} className='blog'>
                <section className='blogName'>
                    <p> {blog.name} </p>
                </section>
                <section className='blogIcons'>
                    <FontAwesomeIcon 
                      icon={faEdit}
                      className='editIcon'
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

export default BlogsDisplay