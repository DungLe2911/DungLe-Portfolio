import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolid from '@fortawesome/free-solid-svg-icons'
import "../Style/Resume.css"
import { educationList, experienceList } from "../Asset/Data.js";

export default function Resume(){
    const getDuration = (dateRange) =>{
        const [startStr, endStr] = dateRange.split(" - ");
        const startDate = new Date(Date.parse(startStr));
        const endDate = endStr === "Present" ? new Date() : new Date(Date.parse(endStr));

    
        let years = endDate.getFullYear() - startDate.getFullYear();
        let months = endDate.getMonth() - startDate.getMonth();
    
        if (months < 0) {
            years -= 1;
            months += 12;
        }
    
        let result = [];
        if (years > 0) result.push(`${years} year${years > 1 ? "s" : ""}`);
        if (months > 0) result.push(`${months} month${months > 1 ? "s" : ""}`);
        return result.join(", ");
    }
    return(
        <div className="pageContainer">
            <header>
                <h2 className=" h2 articleTitle">
                    Resume
                </h2>
            </header>
            <section className="timeline">
                <div className="titleWrapper">
                    <div className="iconBox">
                        <FontAwesomeIcon  icon={FaSolid.faBookOpen}/>
                    </div>
                    <h3 className="h3"> Education</h3>
                </div>
                <ol className="timelineList">
                    {educationList.map((education, index)=>{
                        return (
                            <li key={index} className="timelineItem">
                                <h3 className="h3 timelineItemTitle">
                                    {education.school}
                                </h3>
                                <span className="timelineText" style={{fontWeight: 700}}>{education.period}</span>
                                <h4 className="h4 timelineText">{education.degree}</h4>
                                <p className="timelineText">GPA: {education.GPA}</p>
                            </li>
                        )
                    })}
                </ol>
            </section>

            <section className="timeline">
                <div className="titleWrapper">
                    <div className="iconBox">
                        <FontAwesomeIcon  icon={FaSolid.faBriefcase}/>
                    </div>
                    <h3 className="h3"> Experience</h3>
                </div>
                <ol className="timelineList">
                    {experienceList.map((experience, index)=>{
                        return (
                            <li key={index} className="timelineItem">
                                <h4 className="h4 timelineItemTitle">
                                    {experience.title}
                                </h4>
                                <h5 className="h5 timelineText" style={{fontWeight: 700}}>company: {experience.company}</h5>
                                <h5 className="h5 timelineText">{experience.time} • {getDuration(experience.time)}</h5>
                                <ol className="experienceList">
                                    {experience.bulletPoints.map((point, index)=>{
                                        return(
                                            <li key={index} className="experienceBulletPoint">
                                                {point}
                                            </li>
                                        )
                                    })}
                                </ol>
                            </li>
                        )
                    })}
                </ol>
            </section>

            <section className="timeline">
                <div className="titleWrapper">
                    <div className="iconBox">
                        <FontAwesomeIcon  icon={FaSolid.faScrewdriverWrench}/>
                    </div>
                    <h3 className="h3">My Skills</h3>
                </div>
                {/* <ol className="timelineList">
                    {educationList.map((education, index)=>{
                        return (
                            <li key={index} className="timelineItem">
                                <h3 className="h3 timelineItemTitle">
                                    {education.school}
                                </h3>
                                <span className="timelineText" style={{fontWeight: 700}}>{education.period}</span>
                                <h4 className="h4 timelineText">{education.degree}</h4>
                                <p className="timelineText">GPA: {education.GPA}</p>
                            </li>
                        )
                    })}
                </ol> */}
            </section>
        </div>
    )
}