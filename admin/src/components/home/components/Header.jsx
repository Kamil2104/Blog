import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import '../assets/Header.css'

// eslint-disable-next-line react/prop-types
const Header = ({ setActualPanel }) => {
    const navigate = useNavigate()

    const handleCreateBlog = () => {
        setActualPanel("Create")
    }

    const handleManageBlogs = () => {
        setActualPanel("Manage")
    }

    const handleLogOut = () => {
        axios.post('http://localhost:3001/logOut')
        .then(res => {
            if (res.data === "Success") {
                navigate('/')
            } else {
                alert("Something went wrong with our servers. Try again later.")
            } 
        })
        .catch(err => console.log(err))
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