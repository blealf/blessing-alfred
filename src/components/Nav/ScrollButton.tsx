import './Nav.scss'
import scroll from '../../assets/scroll.svg'
import {useEffect, useState} from "react";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false)

    const handleVisibility = () => {
        setVisible(window.scrollY > window.innerHeight/2)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibility)
        return () =>  window.removeEventListener('scroll', handleVisibility)
    }, [])


    return (
        <div className="scroll-btn">
            {visible
                ? (<img
                        src={scroll}
                        alt="scroll"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            })
                        }}
                />)
                : null}

        </div>
    )
}

export default ScrollButton