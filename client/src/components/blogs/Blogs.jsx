import PinnedBlog from "./components/PinnedBlogs"

import './assets/Blogs.css'

const Blogs = () => {
    return (
        <section className="blogs">
            <section className="pinnedBlog">
                <PinnedBlog />
            </section>
        </section>
    )
}

export default Blogs