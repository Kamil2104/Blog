import { scrollToComponent } from "../functions/scrollToComponent"

import { faHome, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
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