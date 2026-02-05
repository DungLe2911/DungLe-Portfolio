import "../Style/InfoCard.css"
import profile from '../Asset/profile.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolid from '@fortawesome/free-solid-svg-icons';
import * as FaRegular from '@fortawesome/free-regular-svg-icons';
import * as FaBrand from '@fortawesome/free-brands-svg-icons';
import { contactsList, socialList } from "../Asset/Data.js";
import { useState } from "react";
import DownloadBtn from "./DownloadBtn.js";
import { ReactComponent as LeetcodeIcon } from "../Asset/Resume/Leetcode.svg";

const iconMap = { ...FaSolid, ...FaRegular, ...FaBrand };
export default function InfoCard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className={sidebarOpen ? "infoCardContainer active" : "infoCardContainer"}>
            <div className="basicInfo">
                <figure className="avatarBox">
                    <img alt="Dung Hoang Le" src={profile} width={80} />
                </figure>
                <div className="infoContent">
                    <h1 className="name" title="Dung Hoang Le">
                        Dung Hoang Le
                    </h1>
                    <p className="title"> Full Stack Web Developer</p>
                </div>
                <button className="moreInfoBtn" onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <span>{sidebarOpen ? "Hide Contact" : "Show Contact"}</span>
                </button>
            </div>
            <div className="detailInfo">
                <div className="seperator"></div>
                <ul className="contactsList">
                    {contactsList.map((contact, index) => {
                        return (
                            <li key={index} className="contactItem">
                                <div className="iconBox">
                                    <FontAwesomeIcon icon={iconMap[contact.icon]} />
                                </div>
                                <div className="contactInfo">
                                    <div className="contactTitle">{contact.title}</div>
                                    {
                                        contact.type === 'link' ?
                                            <a className="contactLink" href={contact.content.startsWith("+") ?
                                                `tel:${contact.content.replace(/[\s()]/g, "")}` :
                                                `mailto: ${contact.content}`}>
                                                {contact.content}
                                            </a> :
                                            /\d/.test(contact.content) ?
                                                <time dateTime={new Date(contact.content).toISOString().split('T')[0]}>{contact.content}</time> :
                                                <address>{contact.content}</address>
                                    }
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="seperator"></div>
                <ul className="socialList">
                    {socialList.map((social, index) => {
                        return (
                            <li key={index} className="socialItem">
                                <a href={social.link} className="socialLink">
                                    <FontAwesomeIcon icon={iconMap[social.icon]} />
                                </a>
                            </li>
                        )
                    })}
                    <li className="socialItem">
                        <a href={"https://leetcode.com/u/lehoangdung29111998/"} className="socialLink">
                            <LeetcodeIcon className="w-5 h-5" />
                        </a>
                    </li>
                </ul>
                <div className="seperator"></div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                    <DownloadBtn />
                </div>
            </div>
        </div>
    );
}