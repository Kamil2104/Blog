import { scrollToComponent } from "../functions/scrollToComponent"

import { faHome, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import PropTypes from "prop-types"

const Navbar = ({ blogNames }) => {

    return (
        <>
            <section className="pinnedInformationsHeader">
                <p> Pinned <br /> informations </p>
            </section>
            <section className="navigateToStart" onClick={() => scrollToComponent("header")} data-tooltip="Start">
                <p> Start </p>
                <FontAwesomeIcon
                    icon={faHome}
                    className="pinnedBlogIcon"
                />
            </section>
            <section className="navigateToPinnedBlog" onClick={() => scrollToComponent("pinnedBlogName")} data-tooltip="About me">
                <p> About me </p>
                <FontAwesomeIcon
                    icon={faMapPin}
                    className="pinnedBlogIcon"
                />
            </section>
            <section className="databaseBlogsHeader">
                <p> Recently <br /> uploaded </p>
            </section>
            {blogNames.map((blog) => (
                <section className="navigateToDatabaseBlog" key={blog.name}>
                    <section className={blog.name} onClick={() => scrollToComponent(blog.name)} data-tooltip={blog.name}>
                        <p> {blog.name} </p>
                    </section>
                </section>
            ))}
        </>
  )
}

Navbar.propTypes = {
    blogNames: PropTypes.array.isRequired
};

export default Navbar