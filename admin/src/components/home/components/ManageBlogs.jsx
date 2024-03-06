import { useEffect, useState } from 'react'

import BlogsDisplay from './BlogsDisplay'
import NoBlogsAvailable from './error/NoBlogsAvailable'
import EditBlog from './EditBlog'
import Loader from './Loader'

import axios from 'axios'

import '../assets/styles/ManageBlogs.css'

const ManageBlogs = () => {
    const [isBlog, setIsBlog] = useState(undefined)
    const [blogs, setBlogs] = useState([])
    
    const [loading, setLoading] = useState(true)

    const [displayOrEdit, setDisplayOrEdit] = useState('display')
    const [editedBlogName, setEditedBlogName] = useState('')

    useEffect(() => {
      axios.post('http://localhost:3001/displayBlogsNames')
      .then(res => {1
        if (res.data === "Error") {
            alert("Something went wrong with our servers. Try again later.")
        } else if (res.data === "No blogs available") {
            setIsBlog(false)
        } else {
            setIsBlog(true)

            const blogNames = Object.values(res.data);
            setBlogs(blogNames);

            setLoading(false)
        }
      })
      .catch((err) => console.log(err))
    }, [])

    if (loading) {
      return <Loader />
    }

    return (
      <div className="manageBlogs">
        {isBlog === true ? (
          displayOrEdit === 'display' ? (
            <BlogsDisplay blogs={blogs} setDisplayOrEdit={setDisplayOrEdit} setEditedBlogName={setEditedBlogName}/>
          ) : (
            <EditBlog editedBlogName={editedBlogName}/>
          )
        ) : isBlog === false ? (
          <NoBlogsAvailable />
        ) : (
          <p />
        )}
      </div>
    )
  }
  
  export default ManageBlogs