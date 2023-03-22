import React from 'react'
import Heading from '../Heading'
import './Contact.scss'

const Contact = () => {
  return (
    <div className="contact">
      <Heading title="Contact." both={true} />
      <h2>Get In Touch</h2>
      <button>Contact Me</button>
      <p>Developed by Blessing Alfred</p>
      <p>© 2023</p>
    </div>
  )
}

export default Contact