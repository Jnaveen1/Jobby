import './index.css'

const EmployementTypes = props => {
  const {eachType, uniqueKey, onChangeJobType} = props
  const {label, employmentTypeId} = eachType
  console.log(label)

  const changeTypeStatus = () => {
    onChangeJobType(uniqueKey)
  }

  return (
    <li className="list-container">
      <input
        type="checkbox"
        id={employmentTypeId}
        onChange={changeTypeStatus}
      />
      <label className="label" htmlFor={employmentTypeId}>
        {label}
      </label>
    </li>
  )
}

export default EmployementTypes
