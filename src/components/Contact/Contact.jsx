import React from 'react'
import Heading from '../Heading'
import './Contact.scss'

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <Heading title="Contact." both={true} />
      <h2>Get In Touch</h2>
      <button>Contact Me</button>
    </div>
  )
}

export default Contact