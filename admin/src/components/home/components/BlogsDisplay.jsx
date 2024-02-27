import { useEffect } from "react"

const BlogsDisplay = (blogData) => {
  useEffect(() => {
    if (blogData) {
      // TODO: Add functionality for displaying blogs (blogData is an object)
    }
  }, [blogData])

  return (
    <div> 
        {/* Display blogs here */}
    </div>
  )
}

export default BlogsDisplay