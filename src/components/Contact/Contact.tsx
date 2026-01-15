import { useDataContext } from '../../contexts/DataContext'
import Heading from '../Heading'
import './Contact.scss'

const Contact = () => {

    const email = useDataContext().email
  return (
    <div id="contact" className="contact">
      <Heading title="Contact." both={true} />
      <h2>Get In Touch</h2>
        <a href={`mailto:${email}`}><button>Contact Me</button></a>
    </div>
  )
}

export default Contact