import React from 'react'
import Heading from '../Heading'
import './Work.scss'
import github from '../../assets/nav/github.svg'
import link from '../../assets/link.svg'
import { work } from '../../utils/data.js'

const Work = () => {
  const willFloatRight = (value) => {
    return (value + 1) % 2 === 0
  }

  return (
    <div id="work" className="work">
      <Heading title="Work." />
        {work.map((project, index) => {
          return (
            <div key={project.link} className="work_wrapper">
              <div className="image" style={{
                marginLeft: willFloatRight(index) ? '' : 'auto'
              }}></div>
              <div className="float" style={{
                alignItems: willFloatRight(index) ? 'flex-end' : 'flex-start',
                right: willFloatRight(index) ? 0 : '',
              }}>
                <h3>{project.name}</h3>
                <p className="description">{project.description}</p>
                <div className="techs">
                  {project.techs.join(', ')}
                </div>
                <div className="icons">
                  <a href={project.github} target="_blank">
                    <img src={github} alt="github" />
                  </a>
                  <a href={project.link} target="_blank">
                    <img src={link} alt="link" />
                  </a>
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Work