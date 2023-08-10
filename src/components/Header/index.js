import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="nav-container">
      <Link to="/">
        <p className="link">Home</p>
      </Link>
      <Link to="/about">
        <p className="link">About</p>
      </Link>
    </div>
  </nav>
)

export default Header
