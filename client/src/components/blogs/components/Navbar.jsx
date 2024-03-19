import { scrollToComponent } from "../functions/scrollToComponent"

import { faHome, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"

const Navbar = () => {
  axios.post('http://localhost:3001/getNames')
  .then(res => {
    if (res.data === "Success") {
        console.log(res.data)
    } else {
        alert("Something went wrong with our servers. Try again later.")
    }
  })
  .catch(err => console.log(err))

  return (
    <>
        <section className="navigateToStart" onClick={() => scrollToComponent("header")}>
            <p> Start </p>
            <FontAwesomeIcon
                icon={faHome}
                className="pinnedBlogIcon"
            />
        </section>
        <section className="navigateToPinnedBlog" onClick={() => scrollToComponent("pinnedBlogName")}>
            <p> About me </p>
            <FontAwesomeIcon
                icon={faMapPin}
                className="pinnedBlogIcon"
            />
        </section>
        <section className="navigateToDatabaseBlog">
            <section className="firstBlog">
                <p> First Blog </p>
            </section>
        </section>
    </>
  )
}

export default Navbar