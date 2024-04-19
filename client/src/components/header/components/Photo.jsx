import { useState, useEffect } from 'react'

import MyPhoto from '../assets/MyPhoto.png'
import noImageAvailable from '../assets/noImageAvailable.png'

const Photo = () => {
  const [myPhoto, setMyPhoto] = useState(noImageAvailable)

  useEffect(() => {
    if(MyPhoto) {
      setMyPhoto(MyPhoto)
    }
  }, [])

  return (
    <>
        <img src={myPhoto} alt="My photo" />
    </>
  )
}

export default Photo