import { useDataContext } from '../../contexts/DataContext';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import './Footer.scss';

const Footer = () => {
    const data = useDataContext()
    const { copyToClipboard } = useCopyToClipboard()
    
    return (
        <div className="footer">
            <div className="social">
                {data.socialIcons.map(item => {
                    return (
                        <a href={item.link} target="_blank" key={item.name}>
                            <img src={item.path} alt={item.name} />
                        </a>
                    )
                })}
            </div>
            <p>By Blessing Alfred</p>
            <p onClick={() => copyToClipboard(data.email)}>© 2026 <span className="email">{data.email}</span></p>
        </div>
    )
}

export default Footer