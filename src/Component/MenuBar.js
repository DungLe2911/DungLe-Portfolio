import "../Style/MenuBar.css"
import ProfileImg from "../Picture/profile.JPG"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Fa from '@fortawesome/free-brands-svg-icons'
// import { Link } from "react-router-dom/cjs/react-router-dom";

export default function MenuBar(){
    const socialMedia = [
        {
            icon:Fa.faGoogle,
            path:"google.com" 
        },
        {
            icon:Fa.faYoutube,
            path:"youtube.com"
        },
        {
            icon:Fa.faLinkedin,
            path:"Linkedin.com"
        },
        {
            icon:Fa.faInstagram,
            path:'instagram.com'
        }
    ];
    return(
    <div className="MenuBarContainer">
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
        <div className="Nav-Menu"></div>
    </div>);
}