import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrashCan } from '@fortawesome/free-regular-svg-icons'

import '../assets/styles/BlogsDisplay.css'

const BlogsDisplay = () => {

  return (
    <div className='blogsDisplay'> 
        {/* Display blogs here */}
        <section className='blog'>
          <section className='blogName'>
            <p> To, co dzisiaj mnie spotkało zdziwi was wszystkich. Nawet ja się tego nie spodziewałem, a to rzadkie </p>
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
        <section className='blog'>

        </section>
        <section className='blog'>

        </section>
    </div>
  )
}

export default BlogsDisplay