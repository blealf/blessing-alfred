import './Experience.scss'

const Company = (
  { companies, active, setActive }: 
  { companies: string[], active: string, setActive: (company: string) => void }
) => {

  return (
    <div className="company">
      {companies.map((company, index) => {
        return (
          <p
            key={index}
            className={`${company === active ? 'active-company' : ''}`}
            onClick={() => setActive(company)}
          >{company}</p>)
      })}
    </div>
  )
}

export default Company