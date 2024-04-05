import PropTypes from "prop-types"

const DatabaseBlog = ({blogName}) => {
  return (
    <>
        <h1> {blogName} </h1>
    </>
  )
}

DatabaseBlog.propTypes = {
  blogName: PropTypes.string.isRequired
};

export default DatabaseBlog