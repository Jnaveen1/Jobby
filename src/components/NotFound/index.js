import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Navbar />
    <div className="not-found-sub-container">
      <div className="not-found-sub-container1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
          className="not-found-img"
          alt="not found"
        />
        <h1>Page Not Found</h1>
        <p>we're sorry, the page you requested could not be found</p>
        <button type="button" className="retry-btn">
          Retry
        </button>
      </div>
    </div>
  </div>
)

export default NotFound
