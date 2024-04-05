import useFetchBlogNamesDescriptionsAndDates from "./hooks/useFetchBlogNamesDescriptionsAndDates.js";

import Navbar from "./components/Navbar";
import PinnedBlog from "./components/PinnedBlog";
import DatabaseBlog from './components/DatabaseBlog'

import PropTypes from "prop-types"

import './assets/Blogs.css';
import './assets/DatabaseBlog.css'

const Blogs = ({ blogNames }) => {
    const { blogNameDescriptionAndDate, isLoading } = useFetchBlogNamesDescriptionsAndDates()

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
                    {blogNameDescriptionAndDate.map((blog) => (
                        <DatabaseBlog key={blog.name} blogName={blog.name} blogDescription={blog.description} blogDate={blog.date} isLoading={isLoading}/>
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