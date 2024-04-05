import PropTypes from "prop-types"

const DatabaseBlog = ({blogName}) => {
  return (
    <section className="databaseBlog" id={blogName}>
        <header>
            <h1> {blogName} </h1>
        </header>
        <main>
            <article>
                <p> Here will be some part of description </p>
            </article>
            <footer>
                <section className="dateOfUploadingBlog">
                    <p> Date: XXX </p>
                </section>
                <section className="showMoreContentParagraphContainer">
                  <p> Show more </p>
                </section>
            </footer>
        </main>
    </section>
  )
}

DatabaseBlog.propTypes = {
  blogName: PropTypes.string.isRequired
};

export default DatabaseBlog