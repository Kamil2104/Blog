import EditBlogForm from "./EditBlogForm"

import '../assets/styles/EditBlogs.css'

const EditBlog = (editedBlogName) => {
  return (
    <div className="editBlogs">
        <EditBlogForm editedBlogName={editedBlogName}/>
    </div>
  )
}

export default EditBlog