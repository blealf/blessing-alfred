import { useDataContext } from '../../contexts/DataContext';
import './Nav.scss';

const SocialNav = () => {
  const data = useDataContext()
  return (
    <div className="social-nav">
      <div className="nav-social">
        {data.socialIcons.map((item: any) => {
          return (
            <a href={item.link} target="_blank" key={item.name}>
             <item.path className="social-icon" />
            </a>
          )
        })}
        <div className="vertical-divider"></div>
      </div>
    </div>
  )
}

export default SocialNav