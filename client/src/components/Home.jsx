import useFetchBlogNames from "../hooks/useFetchBlogNames"

import Header from "./header/Header"
import Blogs from "./blogs/Blogs"

import Loader from "./loader/components/Loader"

import '../assets/Home.css'

const Home = () => {
  const { blogNames, isLoading } = useFetchBlogNames();

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