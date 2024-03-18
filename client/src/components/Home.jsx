import Header from "./header/Header"
import Blogs from "./blogs/Blogs"

import '../assets/Home.css'

const Home = () => {
  return (
    <div className="home">
        <Header />
        <Blogs />
    </div>
  )
}

export default Home