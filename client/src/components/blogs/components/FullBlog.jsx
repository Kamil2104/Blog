import { useLocation } from 'react-router-dom' 

import Loader from '../../loader/components/Loader'

import useFetchBlog from '../hooks/useFetchBlog'

import PropTypes from "prop-types"
import moment from 'moment'

import '../assets/FullBlog.css'

const FullBlog = () => {
  const location = useLocation()
  const blogName = location?.state?.blogName

  const { blog, isLoading } = useFetchBlog({ blogName })

  return (
    <section className='fullBlog'>
      { isLoading ? (
          <Loader />
      ) : (
        <>
            <header>
                <h1> {blog[0]?.name} </h1>
            </header>
          <main>
              <article>
                  {blog[0]?.description}
              </article>
              <aside>
                  photo
              </aside>
          </main>
              <footer>
                  {moment(blog[0]?.date).format("YYYY-MM-DD, HH:mm")}
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