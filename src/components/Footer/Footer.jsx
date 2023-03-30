import './Footer.scss'
import React from "react";
import github from "../../assets/nav/github.svg";
import twitter from "../../assets/nav/twitter.svg";
import linkedin from "../../assets/nav/linkedin.svg";
import instagram from "../../assets/nav/instagram.svg";

const Footer = () => {
    const socialIcons = [
        { name: 'github', path: github, link: 'https://github.com/' },
        { name: 'twitter', path: twitter, link: 'https://twitter.com/' },
        { name: 'linkedin', path: linkedin, link: 'https://linkedin.com/' },
        { name: 'instagram', path: instagram, link: 'https://instagram.com' }
    ]
    return (
        <div className="footer">
            <div className="social">
                {socialIcons.map(item => {
                    return (
                        <a href="https://google.com" target="_blank">
                            <img src={item.path} alt={item.name} />
                        </a>
                    )
                })}
            </div>
            <p>Developed by Blessing Alfred</p>
            <p>© 2023 <a href="mailto:blealf@gmail.com">blealf@gmail.com</a></p>
        </div>
    )
}

export default Footer