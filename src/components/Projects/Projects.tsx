import { Maximize } from 'lucide-react'
import link from '../../assets/link.svg'
import github from '../../assets/nav/github.svg'
import { work } from '../../utils/data'
import Carousel from '../Carousel/Carousel'
import Heading from '../Heading'
import Modal from '../Modal';
import './Projects.scss'
import { useState } from 'react'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 9999,
  },
};

const Work = () => {
  const [modalIsOpen, setIsOpen] =  useState(false);
  const [currentProject, setCurrentProject] = useState<WorkInterface>({} as WorkInterface);

  const willFloatRight = (value : number) => {
    return (value + 1) % 2 === 0
  }

  const handleOpenModal = (val: WorkInterface) => {
    setCurrentProject(val);
    setIsOpen(true);
  }

  return (
    <div id="projects" className="work">
      <Heading title="Projects." />
        {work.map((project: WorkInterface, index: number) => {
          return (
            <div key={project.link} className="work_wrapper">
              <div className="relative image" style={{
                marginLeft: willFloatRight(index) ? '' : 'auto'
              }}>
                {!!project.photos?.length && <>
                  <Carousel 
                    photos={project.photos} 
                    imageStyle={{ 
                      maxWidth: '1115px', 
                      maxHeight: '300px', 
                      width: '100%', 
                      minHeight: '300px', 
                      marginTop: '5px', 
                      objectFit: 'contain' 
                    }} />
                  <button 
                    className={`absolute bottom-2 ${willFloatRight(index) ? 'left-2' : 'right-2'} z-[99]`}
                    onClick={() => handleOpenModal(project)}
                  >
                    <Maximize className="maximize-icon" />
                  </button>
                </> 
                }
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

        <Modal
          isOpen={modalIsOpen}
          onClose={() => setIsOpen(false)}
          title={currentProject?.name || ''}
        >
        <div className="!z-[9999]">
          <Carousel 
            photos={currentProject?.photos} 
            imageStyle={{ 
              maxWidth: '1200px', 
              maxHeight: '500px', 
              width: '100%', 
              minHeight: '300px', 
              marginTop: '5px', 
              objectFit: 'contain'
            }}
          />
        </div>
      </Modal>
    </div>
  )
}

export default Work