import { useEffect } from "react"

const EditBlog = (editedBlogName) => {
  useEffect(() => {
    console.log(editedBlogName)
  }, [editedBlogName])
  
  return (
    <div>
        EditBlog
    </div>
  )
}

export default EditBlog