import "../Style/MenuBar.css"
import ProfileImg from "../Picture/profile.JPG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icobrands from '@fortawesome/free-brands-svg-icons'
import * as icoReg from '@fortawesome/free-regular-svg-icons'
import * as icoSolid from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom/cjs/react-router-dom";
import useWindowDimensions from "../CustomHooks/HandleResize";
import { useEffect } from "react";

export default function MenuBar(){
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
    const NavBarItem = [
        {
            icon: icoSolid.faHouse,
            text:'Home'
        },{
            icon: icoReg.faUser,
            text:'About'
        },{
            icon: icoReg.faFile,
            text:'Resume'
        },{
            icon: icoSolid.faBarsProgress,
            text: 'Projects'
        },{
            icon: icoReg.faEnvelope,
            text: 'Contact'
        }];
    const {width} = useWindowDimensions();
    useEffect(()=>{
        const menubar = document.querySelector(".MenuBarContainer");
        if(width < 1200){
            menubar.style.overflowY = 'scroll';
        }else{
            menubar.style.overflowY = 'hidden';
        }
    },[width]);
    return(
    //set menubar open by default
    <div className="MenuBarContainer open">
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
        <div className="Nav-Menu">
            {NavBarItem.map((item,index)=>{
                return(
                    <Link to="#" className="NavbarItem" key={index}>
                        <FontAwesomeIcon icon={item.icon}/>
                        &nbsp;
                        &nbsp;
                        {item.text}
                    </Link>
                );
            })}
        </div>
    </div>);
}