import { toast } from 'react-toastify';

const useCopyToClipboard = () => {
  const copyToClipboard = (text: string, item = 'Email') => {
    navigator.clipboard.writeText(text);
    toast.success(`${item} copied to clipboard!`);
  }

  return { copyToClipboard }
}

export default useCopyToClipboard