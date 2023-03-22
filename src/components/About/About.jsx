import React from 'react'
import Heading from '../Heading'
import './About.scss'
import blessing from '../../assets/blessing.png'

const About = () => {
  return (
    <div className="about">
      <Heading title="About Me." />
      <section className="about-section">
        <div className="about-section__left">
          <p>
            Hi, my name is blessing Alfred. As a frontend developer, I am passionate about creating engaging and user-friendly digital experiences. With experience in building and designing web applications, I specialize in creating accessible, human-centered products that cater to the needs of all users. 
            <br />
            <br />

            In my career, I have collaborated with designers, project managers, and other developers to deliver high-quality products that meet client requirements and exceed user expectations. As a self-motivated learner,
            <br />          
            <br />          

            I am committed to staying up to date with the latest web development trends and technologies to continuously improve my skills and deliver cutting-edge products.
            <br />
            <br />

            I am proficient in a range of programming languages and tools:
            <br />
          </p>
          <div className="skills">
            <ul>
              <li>Javascript</li>
              <li>Vue</li>
              <li>Figma</li>
              <li>React</li>
            </ul>
            <ul>
              <li>HTML & CSS</li>
              <li>Git</li>
              <li>Typescript</li>
              <li>Ruby on Rails</li>
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