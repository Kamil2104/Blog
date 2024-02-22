import axios from 'axios'

import '../assets/styles/ManageBlogs.css'

const ManageBlogs = () => {
    axios.post('http://localhost:3001/displayBlogs')
    .then(res => {1
      if (res.data === "Error") {
        alert("Something went wrong with our servers. Try again later.")
      } else {
        console.log(res.data)
      }
    })
    .catch((err) => console.log(err))

    return (
      <div className="manageBlogs">
          ManageBlogs
      </div>
    )
  }
  
  export default ManageBlogs