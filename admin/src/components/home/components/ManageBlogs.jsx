import { useEffect, useState } from 'react'

import NoBlogsAvailable from './error/NoBlogsAvailable'

import axios from 'axios'

import '../assets/styles/ManageBlogs.css'

const ManageBlogs = () => {
    const [isBlog, setIsBlog] = useState(undefined)

    useEffect(() => {
      axios.post('http://localhost:3001/displayBlogs')
      .then(res => {1
        if (res.data === "Error") {
            alert("Something went wrong with our servers. Try again later.")
        } else if (res.data === "No blogs available") {
            setIsBlog(false)
        } else {
            setIsBlog(true)
            console.log(res.data)
        }
      })
      .catch((err) => console.log(err))
    }, [])

    return (
      <div className="manageBlogs">
          {isBlog === true ? (
            <p> Display blogs </p>
          ) : isBlog === false ? (
            <NoBlogsAvailable />
          ) : (
            <p />
          )} 
      </div>
    )
  }
  
  export default ManageBlogs