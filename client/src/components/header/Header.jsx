import Text from "./components/Text"
import Photo from "./components/Photo"

import './assets/Header.css'

const Header = () => {
  return (
    <div className="header" id="header">
        <section className="photoContainer">
            <Photo />
        </section>
        <section className="textContainer">
            <Text />
        </section>
    </div>
  )
}

export default Header