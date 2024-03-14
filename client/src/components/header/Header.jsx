import Text from "./components/Text"
import Photo from "./components/Photo"

import './assets/Header.css'

const Header = () => {
  return (
    <div className="header">
        <aside>
            <Photo />
        </aside>
        <main>
            <Text />
        </main>
    </div>
  )
}

export default Header