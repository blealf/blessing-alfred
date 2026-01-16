import blessing from '../../assets/blessing.png'
import blessing1 from '../../assets/blessing1.png'
import blessing2 from '../../assets/blessing2.png'
import { about } from '../../utils/data.js'
import Heading from '../Heading'
import './About.scss'

const About = () => {
  return (
    <div className="about" id="about">
      <Heading title="About Me." />
      <section className="about-section">
        <div className="about-section__left">
          {about.summary.map((text, index) => {
            return (
              <p key={index}>{text}</p>
            )
          })}
          <div className="skills">
            <ul>
              {about.skills.map((skill, index) => {
                return (
                  <li key={index}>{skill}</li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="about-section__right">
          <img src={blessing} alt="blessing" />
        </div>
      </section>
    </div>
  )
}

export default About