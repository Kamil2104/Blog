import { useNavigate } from 'react-router-dom'

import { setCreateBlogsLinkBackgroundAsActive, setManageBlogsLinkBackgroundAsActive } from '../functions/headerBackgroundColorSwitchHandler'

import axios from 'axios'

import '../assets/styles/Header.css'

// eslint-disable-next-line react/prop-types
const Header = ({ setActualPanel }) => {
    const navigate = useNavigate()

    const handleCreateBlog = () => {
        setCreateBlogsLinkBackgroundAsActive("createBlogsLinkId", "manageBlogsLinkId")

        setActualPanel("Create")
    }

    const handleManageBlogs = () => {
        setManageBlogsLinkBackgroundAsActive("createBlogsLinkId", "manageBlogsLinkId")

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
            <a 
                className='active'
                id='createBlogsLinkId'
                onClick={handleCreateBlog}
            > Create a blog </a>
            <a 
                id='manageBlogsLinkId'
                onClick={handleManageBlogs}
            > Manage blogs </a>
        </menu>
        <aside>
            <a 
                className='logOutLink'
                onClick={handleLogOut}
            > Log out </a>
        </aside>
    </header>
  )
}

export default Header