import { faHome, faMapPin } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Navbar = () => {
  return (
    <>
        <section className="navigateToStart">
            <p> Start </p>
            <FontAwesomeIcon
                icon={faHome}
                className="pinnedBlogIcon"
            />
        </section>
        <section className="navigateToPinnedBlog">
            <p> About me </p>
            <FontAwesomeIcon
                icon={faMapPin}
                className="pinnedBlogIcon"
            />
        </section>
        <section className="navigateToDatabaseBlog">
            <p> First Blog </p>
        </section>
        <section className="navigateToDatabaseBlog">
            <p> Second Blog </p>
        </section>
        <section className="navigateToDatabaseBlog">
            <p> Third Blog </p>
        </section>
        <section className="navigateToDatabaseBlog">
            <p> Fourth Blog </p>
        </section>
        <section className="navigateToDatabaseBlog">
            <p> Fifth Blog </p>
        </section>
    </>
  )
}

export default Navbar