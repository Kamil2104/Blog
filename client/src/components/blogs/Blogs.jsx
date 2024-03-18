import Navbar from "./components/Navbar"
import PinnedBlog from "./components/PinnedBlogs"

import './assets/Blogs.css'

const Blogs = () => {
    return (
        <section className="blogs">
            <nav>
                <Navbar />   
            </nav>
            <main>
                <section className="pinnedBlog">
                    <PinnedBlog />
                </section>
                <section className="databaseBlogs">

                </section>
            </main>
        </section>
    )
}

export default Blogs