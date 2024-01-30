import '../assets/Header.css'

// eslint-disable-next-line react/prop-types
const Header = ({ setActualPanel }) => {
    const handleCreateBlog = () => {
        setActualPanel("Create")
    }

    const handleManageBlogs = () => {
        setActualPanel("Manage")
    }

    const handleLogOut = () => {

    }

  return (
    <header>
        <menu>
            <a onClick={handleCreateBlog}> Create a blog </a>
            <a onClick={handleManageBlogs}> Manage blogs </a>
        </menu>
        <aside>
            <a onClick={handleLogOut}> Log out </a>
        </aside>
    </header>
  )
}

export default Header