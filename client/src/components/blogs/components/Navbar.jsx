import { scrollToComponent } from "../functions/scrollToComponent"

import { faHome, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from "prop-types"
import { useEffect } from "react"

const Navbar = ({ blogNames }) => {
  useEffect(() => {
    console.log(blogNames)
  }, [blogNames])
  
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

Navbar.propTypes = {
    blogNames: PropTypes.array.isRequired
};

export default Navbar