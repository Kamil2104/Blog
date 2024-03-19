import Navbar from "./components/Navbar";
import PinnedBlog from "./components/PinnedBlogs";

import PropTypes from "prop-types"

import './assets/Blogs.css';

const Blogs = ({ blogNames }) => {
    return (
        <section className="blogs">
            <nav>
                <Navbar blogNames={blogNames}/>   
            </nav>
            <main>
                <section className="pinnedBlog">
                    <PinnedBlog />
                </section>
                <section className="databaseBlogs">
                    {/* Placeholder for database blogs */}
                </section>
            </main>
         </section>
    );
};

Blogs.propTypes = {
    blogNames: PropTypes.array.isRequired
};

export default Blogs;