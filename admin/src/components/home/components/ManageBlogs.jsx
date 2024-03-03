import { useEffect, useState } from 'react'

import BlogsDisplay from './BlogsDisplay'
import NoBlogsAvailable from './error/NoBlogsAvailable'

import axios from 'axios'

import '../assets/styles/ManageBlogs.css'

const ManageBlogs = () => {
    const [isBlog, setIsBlog] = useState(undefined)
    const [blogs, setBlogs] = useState([])

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
        }
      })
      .catch((err) => console.log(err))
    }, [])

    return (
      <div className="manageBlogs">
          {isBlog === true ? (
            <BlogsDisplay blogs={blogs} />
          ) : isBlog === false ? (
            <NoBlogsAvailable />
          ) : (
            <p />
          )} 
      </div>
    )
  }
  
  export default ManageBlogs