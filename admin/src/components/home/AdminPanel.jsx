import { useState } from 'react'

import Header from './components/Header'

import './assets/AdminPanel.css'

const AdminPanel = () => {
  const [actualPanel, setActualPanel] = useState("Create")

  return (

    <div className="adminPanel"> 
      <Header setActualPanel={setActualPanel} />
    </div>
  )
}

export default AdminPanel