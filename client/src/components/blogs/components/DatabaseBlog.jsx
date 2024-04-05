import Loader from "../../loader/components/Loader.jsx";

import PropTypes from "prop-types"

const DatabaseBlog = ({ blogName, blogDescription, blogDate, isLoading }) => {

  return (
    <section className="databaseBlog" id={blogName}>
      { isLoading === false ? (
        <>
          <header>
              <h1> {blogName} </h1>
          </header>
          <main>
              <article>
                  <p> {blogDescription} </p>
              </article>
              <footer>
                  <section className="dateOfUploadingBlog">
                      <p> {blogDate} </p>
                  </section>
                  <section className="showMoreContentParagraphContainer">
                    <p> Show more </p>
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