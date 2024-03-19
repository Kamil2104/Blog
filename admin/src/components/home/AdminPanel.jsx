import { useState } from 'react'

import Header from './components/Header'
import CreateBlogs from './components/CreateBlogs'
import ManageBlogs from './components/ManageBlogs'
import Loader from './components/Loader'
import NotLoggedIn from './components/error/NotLoggedIn'

import axios from 'axios'

import './assets/styles/AdminPanel.css'

const AdminPanel = () => {
  const [actualPanel, setActualPanel] = useState("Create")
  const [logged, setLogged] = useState(null)

  axios.post('http://localhost:3002/loggedIn')
  .then(res => {
    if (res.data === "Success") {
      setLogged(true)
    } else if (res.data === "Fail") {
      setLogged(false)
    } else {
      setLogged(null)
      alert("Something went wrong with our servers. Try again later.")
    }
  })
  .catch(err => console.log(err))

  return (
    <div className="adminPanel"> 
      { logged ? (
        <>
          <Header setActualPanel={setActualPanel} />
          { actualPanel === "Create" ? (
            <CreateBlogs />
          ) : actualPanel === "Manage" ? (
            <ManageBlogs />
          ) : (
            <div className='blankContainer'></div>
          )}
        </>
      ) : logged === false ? (
        <NotLoggedIn />
      ) : (
        <Loader />
      )}
    </div>
  )
}

export default AdminPanel
