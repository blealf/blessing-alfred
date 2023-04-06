import React, {useContext} from 'react'
import Heading from '../Heading'
import './Contact.scss'
import {DataContext} from '../../App.jsx'

const Contact = () => {

    const email = useContext(DataContext).email
  return (
    <div id="contact" className="contact">
      <Heading title="Contact." both={true} />
      <h2>Get In Touch</h2>
        <a href={`mailto:${email}`}><button>Contact Me</button></a>

    </div>
  )
}

export default Contact