import "../Style/MenuBar.css"
import ProfileImg from "../Picture/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Fa from '@fortawesome/free-brands-svg-icons'

export default function MenuBar(){
    const socialMedia = [
        {
            icon:Fa.faGoogle,
            path:"www.google.com" 
        },
        {
            icon:Fa.faYoutube,
            path:"www.Youtube.com"
        },
        {
            icon:Fa.faLinkedin,
            path:"www.Linkedin.com"
        },
        {
            icon:Fa.faInstagram,
            path:'www.instagram.com'
        }
    ];
    return(
    <div className="MenuBarContainer">
        <div className="Profile">
            <img className="ProfilePic" src={ProfileImg} alt="ProfilePic"></img>
            <h1 className="TextName">
                <a href="index.html">Dung Hoang Le</a>
            </h1>
            <div className="SocialMediaContainer">
                {socialMedia.map((item,index)=>{
                    return(
                        <a href={item.path}>
                            <FontAwesomeIcon key={index} icon={item.icon}/>
                        </a>
                    );
                })}
            </div>
        </div>
        <div className="Nav-Menu"></div>
    </div>);
}