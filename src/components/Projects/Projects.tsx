import link from '../../assets/link.svg'
import github from '../../assets/nav/github.svg'
import { work } from '../../utils/data'
import Carousel from '../Carousel/Carousel'
import Heading from '../Heading'
import './Projects.scss'

const Work = () => {
  const willFloatRight = (value : number) => {
    return (value + 1) % 2 === 0
  }

  return (
    <div id="projects" className="work">
      <Heading title="Projects." />
        {work.map((project, index) => {
          return (
            <div key={project.link} className="work_wrapper">
              <div className="image" style={{
                marginLeft: willFloatRight(index) ? '' : 'auto'
              }}>
                {!!project.photos?.length && <Carousel photos={project.photos} />}
              </div>
              <div className="float" style={{
                alignItems: willFloatRight(index) ? 'flex-end' : 'flex-start',
                right: willFloatRight(index) ? 0 : '',
              }}>
                <h3 className="project-title">{project.name}</h3>
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