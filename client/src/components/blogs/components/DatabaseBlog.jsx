import { useNavigate } from 'react-router-dom'

import { sliceDescriptionTextHandler } from "../functions/sliceDescriptionText.js";

import Loader from "../../loader/components/Loader.jsx";

import PropTypes from "prop-types"
import moment from "moment"

const DatabaseBlog = ({ blogName, blogDescription, blogDate, isLoading }) => {
  const navigate = useNavigate()

  const formattedDate = moment(blogDate).format("YYYY-MM-DD, HH:mm")

  const handleNavigation = () => {
      navigate("/fullBlog", { state: { blogName } })
  }

  return (
    <section className="databaseBlog" id={blogName}>
      { isLoading === false ? (
        <>
          <header>
              <h1> {blogName} </h1>
          </header>
          <main>
              <article>
                  <p> {sliceDescriptionTextHandler(blogDescription)} </p>
              </article>
              <footer>
                  <section className="dateOfUploadingBlog">
                      <p> {formattedDate} </p>
                  </section>
                  <section className="showMoreContentParagraphContainer">
                    <p onClick={handleNavigation}> Show more </p>
                  </section>
              </footer>
          </main>
        </>
      ) : (
        <Loader />
      )}
    </section>
  )
}

DatabaseBlog.propTypes = {
  blogName: PropTypes.string.isRequired,
  blogDescription: PropTypes.string.isRequired,
  blogDate: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default DatabaseBlog