import { useState } from 'react'

import Header from './components/Header'
import CreateBlogs from './components/CreateBlogs'
import ManageBlogs from './components/ManageBlogs'

import './assets/AdminPanel.css'

const AdminPanel = () => {
  const [actualPanel, setActualPanel] = useState("Create")

  return (

    <div className="adminPanel"> 
      <Header setActualPanel={setActualPanel} />
      { actualPanel === "Create" ? (
        <CreateBlogs />
      ) : actualPanel === "Manage" ? (
        <ManageBlogs />
      ) : (
        <div className='blankContainer'> </div>
      )}
    </div>
  )
}

export default AdminPanel