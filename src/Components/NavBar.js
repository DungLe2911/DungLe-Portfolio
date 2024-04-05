import React from "react";
import '../Style/NavBar.css'
import ProfileImg from "../Picture/profile.JPG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icobrands from '@fortawesome/free-brands-svg-icons'
import * as icoReg from '@fortawesome/free-regular-svg-icons'
import * as icoSolid from '@fortawesome/free-solid-svg-icons'
import { Menu } from "antd";


function getItem(label, key, icon, children, type) {
    return {
      key,
      icon: <FontAwesomeIcon icon={icon}/>,
      children,
      label,
      type,
    };
}

export default function NavBar(){
    const socialMedia = [
        {
            icon:icobrands.faGoogle,
            path:"google.com" 
        },
        {
            icon:icobrands.faYoutube,
            path:"youtube.com"
        },
        {
            icon:icobrands.faLinkedin,
            path:"Linkedin.com"
        },
        {
            icon:icobrands.faInstagram,
            path:'instagram.com'
        }];
        const items = [
            getItem('Home', '1', icoSolid.faHouse),
            getItem('About', '2',  icoReg.faUser),
            getItem('Résume', '3', icoReg.faFile),
            getItem('Projects', '4', icoSolid.faBarsProgress),
            getItem('Contact', '5', icoReg.faEnvelope)
          ];
    return (
        <div className="NavBarContainer">
            {/* NavBar profile */}
            <div className="Profile">
                <img className="ProfilePic" src={ProfileImg} alt="ProfilePic"></img>
                <h1 className="TextName">Dung Hoang Le</h1>
                <div className="SocialMediaContainer">
                    {socialMedia.map((item,index)=>{
                        return(
                            <a href={"https://www."+item.path} target="_blank" rel="noopener noreferrer" className="SocialTag" key={index} >
                                <FontAwesomeIcon icon={item.icon}/>
                            </a>
                        );
                    })}
                </div>
            </div>
            {/* Navbar menu item */}
            <Menu className="NavBarMenu" defaultSelectedKeys={['0']} items={items} mode="vertical" theme="dark"/>
        </div>
    );
};