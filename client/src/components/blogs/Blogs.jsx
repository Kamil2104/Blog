import Navbar from "./components/Navbar";
import PinnedBlog from "./components/PinnedBlog";
import DatabaseBlog from './components/DatabaseBlog'

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
                    {blogNames.map((blog) => (
                        <DatabaseBlog key={blog.name} blogName={blog.name} />
                    ))}
                </section>
            </main>
         </section>
    );
};

Blogs.propTypes = {
    blogNames: PropTypes.array.isRequired
};

export default Blogs;