import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"

const PinnedBlog = () => {
    return (
        <section className="blog">
            <header>
                <section className="pinnedBlogName">
                    <h1> About me </h1>
                </section>
                <section className="pinnedBlogIcon">
                    <FontAwesomeIcon 
                        icon={faMapPin}
                        className="pinIcon"
                    />
                </section>
            </header>
            <article>
                <p> 
                My name is Kamil. I&apos;m an 18-year-old student majoring in programming engineering. In school, I learned the basics of programming, 
                but I realized that without my own effort and self-learning, 
                I won&apos;t achieve the level of success I aspire to. That&apos;s why I started learning React, Express, and Jest on my own.
                </p>
                <p> 
                    So here I am! This is a web app created by me (it also includes an admin page). 
                    It&apos;s my third project and I won&apos;t stop here! <br />
                </p> 
                <p className="lastParagraph"> 
                    I hope you&apos;ll enjoy this page!
                </p>
            </article>
        </section>
    )
}

export default PinnedBlog