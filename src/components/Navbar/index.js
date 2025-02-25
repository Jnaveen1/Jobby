import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Navbar = props => {
  const logout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div className="navbar-container">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="image-logo"
        />
      </Link>
      <ul className="unordered-list-container">
        <Link to="/" className="link-container">
          <li className="list-item">Home</li>
        </Link>
        <Link to="/jobs" className="link-container">
          <li className="list-item">Jobs</li>
        </Link>
      </ul>
      <li className="list-btn">
        <button type="button" className="button" onClick={logout}>
          Logout
        </button>
      </li>
    </div>
  )
}

export default withRouter(Navbar)
