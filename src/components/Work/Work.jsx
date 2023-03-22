import React from 'react'
import Heading from '../Heading'
import './Work.scss'
import github from '../../assets/nav/github.svg'
import link from '../../assets/link.svg'

const Work = () => {
  const tags = 'VS Code Sublime Text Atom iTerm2 Hyper'.split(' ')
  const willFloatRight = (value) => {
    return (value + 1) % 2 === 0
  }
  const work = [1,2,3]
  return (
    <div id="work" className="work">
      <Heading title="Work." />
        {work.map((item, index) => {
          return (
            <div className="work_wrapper">
              <div className="image" style={{
                marginLeft: willFloatRight(index) ? '' : 'auto'
              }}></div>
              <div className="float" style={{
                alignItems: willFloatRight(index) ? 'flex-end' : 'flex-start',
                right: willFloatRight(index) ? 0 : '',
              }}>
                <p>Project</p>
                <h3>MY PROJECT</h3>
                <div className="description">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.
                </div>
                <div className="tags">
                  {tags.map(tag => <span>{tag}</span>)}
                </div>
                <div className="icons">
                  <a href="https://github.com" target="_blank">
                    <img src={github} alt="github" />
                  </a>
                  <a href="https://github.com" target="_blank">
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