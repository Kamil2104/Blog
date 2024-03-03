import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import '../assets/styles/BlogsDisplay.css'

const BlogsDisplay = (blogs) => {

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
              />
            </section>
          </section>
        ))}
    </div>
  )
}

export default BlogsDisplay