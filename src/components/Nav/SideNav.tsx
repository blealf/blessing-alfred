import { useDataContext } from '../../contexts/DataContext.js';
import useCopyToClipboard from '../../hooks/useCopyToClipboard.js';

const SideNav = () => {
  const data = useDataContext()
  const { copyToClipboard } = useCopyToClipboard()

  return (
    <div className="side-nav">
      <div className="side-nav__left">
        <div className="nav-social">
          {data.socialIcons.map(item => {
            return (
              <a href={item.link} target="_blank">
                <item.path />
              </a>
            )
          })}
          <div className="vertical-divider"></div>
        </div>
      </div>
      <div className="side-nav__right">
        <p onClick={() => copyToClipboard(data.email)}>
          {data.email}
        </p>
        <div className="vertical-divider"></div>
      </div>
    </div>
  )
}

export default SideNav