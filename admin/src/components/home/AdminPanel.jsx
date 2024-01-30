import { useEffect, useState } from 'react'

import Header from './components/Header'

import './assets/AdminPanel.css'

const AdminPanel = () => {
  const [actualPanel, setActualPanel] = useState("Create")

  useEffect(() => {
    alert(actualPanel)
  }, [actualPanel])

  return (

    <div className="adminPanel"> 
      <Header setActualPanel={setActualPanel} />
    </div>
  )
}

export default AdminPanel