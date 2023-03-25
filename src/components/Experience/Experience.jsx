import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Company from './Company'
import './Experience.scss'
import { experiences } from '../../utils/data'

const Experience = () => {
  const companies = experiences.map(item => item.shortCompanyName)
  
  const [activeCompany, setActiveCompany] = useState(companies[0])
  const [experience, setExperience] = useState(experiences[0])

  useEffect(() => {
    setCompany()
  }, [activeCompany])
  
  const setCompany = () => {
    setExperience(
      experiences.find(
        (item) => item.shortCompanyName === activeCompany)
    )
  }
  
  return (
    <div id="experience" className="experience">
      <Heading title="Experience." />
      <div className="experience__divider">
        <div className="company-wrapper">
          <Company
              companies={companies}
              active={activeCompany}
              setActive={setActiveCompany}
          />
        </div>
        <div className="experience__details">
          <h2>
            {experience.title}
            <span>{` @ ${experience.company}`} </span>
          </h2>
          <p>{experience.date}</p>
          <ul>
            {experience.responsibilities.map(responsibility => {
              return (<li key={responsibility}>{responsibility}</li>)
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience