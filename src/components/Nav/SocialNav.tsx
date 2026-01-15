import { useDataContext } from '../../contexts/DataContext';
import './Nav.scss';

const SocialNav = () => {
  const data = useDataContext()
  return (
    <div className="social-nav">
      <div className="nav-social">
        {data.socialIcons.map(item => {
          return (
            <a href={item.link} target="_blank" key={item.name}>
              <img src={item.path} alt={item.name} />
            </a>
          )
        })}
        <div className="vertical-divider"></div>
      </div>
    </div>
  )
}

export default SocialNav