import { useState, useEffect } from "react"

import Header from "./header/Header"
import Blogs from "./blogs/Blogs"

import Loader from "./loader/components/Loader"

import axios from "axios"

import '../assets/Home.css'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)

  const [blogNames, setBlogNames] = useState([])

  useEffect(() => {
    axios.post('http://localhost:3001/getNames')
    .then(res => {
      if (res.data === "Error") {
          alert("Something went wrong with our servers. Try again later.")
      } else {
        setIsLoading(false)
        setBlogNames(res.data)
      }
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="home">
      { isLoading === false ? (
        <>
          <Header />
          <Blogs blogNames={blogNames}/>
        </>
      ) : isLoading === true ? (
        <Loader />
      ) : (
        <p> Something went wrong. Try again later. </p>
      )}
    </div>
  )
}

export default Home