import {BsBriefcase} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import {ImStarFull} from 'react-icons/im'
import {Link} from 'react-router-dom'

import './index.css'

const JobCard = props => {
  const {eachJob, uniqueKey} = props
  const {
    companyLogoUrl,
    employeType,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = eachJob

  return (
    <Link to={`/jobs/${uniqueKey}`} className="link-item">
      <li className="job-card-container">
        <div className="sub-container1">
          <img
            src={companyLogoUrl}
            className="company-logo"
            alt="company logo"
          />
          <div className="rate-title-con">
            <h1 className="style-color title">{title}</h1>
            <div className="star-con">
              <ImStarFull className="star-icon" />
              <p className="style-color rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="sub-container2">
          <div className="icon-container">
            <GoLocation className="react-icon" />
            <p className="para">{location}</p>
          </div>
          <div className="icon-container">
            <BsBriefcase className="react-icon" />
            <p className="para">{employeType}</p>
          </div>
          <p className="package">{packagePerAnnum}</p>
        </div>
        <hr className="horizontal-line" />
        <h1 className="description-heading">Description</h1>
        <p className="description-para">{jobDescription}</p>
      </li>
    </Link>
  )
}

export default JobCard
