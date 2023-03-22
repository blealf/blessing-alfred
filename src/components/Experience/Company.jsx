import './Experience.scss'

const Company = ({ companies, active, setActive }) => {
  
  return (
    <div className="company">
      {companies.map((company) => {
        return (
          <p
            className={`${company === active ? 'active-company' : ''}`}
            onClick={() => setActive(company)}
          >{company}</p>)
      })}
    </div>
  )
}

export default Company