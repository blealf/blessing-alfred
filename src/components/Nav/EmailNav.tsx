import { useDataContext } from '../../contexts/DataContext';
import useCopyToClipboard from '../../hooks/useCopyToClipboard';
import './Nav.scss';

const EmailNav = () => {
  const data = useDataContext()
  const { copyToClipboard } = useCopyToClipboard()

  return (
    <div className="email-nav">
      <p onClick={() => copyToClipboard(data.email)}>
        {data.email}
      </p>
      <div className="vertical-divider"></div>
    </div>
  )
}

export default EmailNav