import './Footer.scss'
import React, {useContext} from "react";
import {DataContext} from "../../App.jsx";

const Footer = () => {
    const data = useContext(DataContext)
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
            <p>Developed by Blessing Alfred</p>
            <p>© 2024 <a href={`mailto:${data.email}`}>{data.email}</a></p>
        </div>
    )
}

export default Footer