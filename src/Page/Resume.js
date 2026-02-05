import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaSolid from '@fortawesome/free-solid-svg-icons'
import "../Style/Resume.css"
import { educationList, experienceList } from "../Asset/Data.js";
import { toolBox } from "../Asset/Data.js";
import { useEffect, useState } from "react";
import DownloadBtn from "../Component/DownloadBtn.js";
import { ReactComponent as LeetcodeIcon } from "../Asset/Resume/Leetcode.svg";
import LeetCodePieChart from "../Component/LeetCodePieChart.js";
import { Box, Button, Fade } from "@mui/material";
import ContributionHeatMap from "../Component/ContributionHeatMap.js";

export default function Resume() {
    const [width, setWidth] = useState(window.innerWidth);
    const [leetcodeProfile, setLeetcodeProfile] = useState(null);
    const [showAmount, setShowAmount] = useState(3);

    useEffect(() => {
        document.title = "Resume - Dung Hoang Le";
        const handleResize = () => setWidth(window.innerWidth);

        const BASE_URL = process.env.NODE_ENV == 'development' ? 'http://localhost:3000' : 'https://alfa-leetcode-api.onrender.com';
        const URL = `${BASE_URL}/lehoangdung29111998/profile`;
        const fetchLeetCodeData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                console.log("Fetched LeetCode Profile:", data);
                setLeetcodeProfile(data);
            } catch (error) {
                console.error("Error fetching LeetCode data:", error);
            }
        };
        fetchLeetCodeData();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleShowMore = () => {
        if (showAmount >= experienceList.length) {
            setShowAmount(3);
        } else {
            setShowAmount(showAmount + 3);
        }
    }

    const getDuration = (dateRange) => {
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

    function highlightKeywords(text) {
        const parts = text.split(/(\[.*?\])/g); // split and keep brackets
        return parts.map((part, index) => {
            if (part.startsWith('[') && part.endsWith(']')) {
                return (
                    <span key={index} className="highlight">
                        {part.slice(1, -1)}
                    </span>
                );
            }
            return part;
        });
    }



    return (
        <div className="pageContainer">
            <header>
                <h2 className=" h2 articleTitle">
                    Resume
                </h2>
            </header>
            <section className="timeline">
                {width < 1250 ? <div style={{ marginBottom: '10px' }}><DownloadBtn /></div> : <></>}
                <div className="titleWrapper">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={FaSolid.faBookOpen} />
                    </div>
                    <h3 className="h3"> Education</h3>
                </div>
                <ol className="timelineList">
                    {educationList.map((education, index) => {
                        return (
                            <li key={index} className="timelineItem">
                                <h3 className="h3 timelineItemTitle">
                                    {education.school}
                                </h3>
                                {/* <span className="timelineText" style={{fontWeight: 700}}>{education.period}</span> */}
                                <h4 className="h4 timelineText">{education.degree}</h4>
                                {/* <p className="timelineText">GPA: {education.GPA}</p> */}
                            </li>
                        )
                    })}
                </ol>
            </section>

            <section className="timeline">
                <div className="titleWrapper">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={FaSolid.faBriefcase} />
                    </div>
                    <h3 className="h3"> Experience</h3>
                </div>
                <ol className="timelineList">
                    {experienceList.map((experience, index) => {
                        return index < showAmount ? (
                            <Fade
                                key={index}
                                in={true}
                                timeout={2000}
                                style={{ transitionDelay: `${(index % 3) * 100}ms` }}
                            >
                                <li className="timelineItem">
                                    <h4 className="h4 timelineItemTitle">
                                        {experience.title}
                                    </h4>
                                    <h5 className="h5 timelineText" style={{ fontWeight: 700 }}>
                                        {experience.company}
                                    </h5>
                                    <h5 className="h5 timelineText">
                                        {experience.time} • {getDuration(experience.time)}
                                    </h5>
                                    <ol className="experienceList">
                                        {experience.bulletPoints.map((point, idx) => (
                                            <li key={idx} className="experienceBulletPoint">
                                                {highlightKeywords(point)}
                                            </li>
                                        ))}
                                    </ol>
                                </li>
                            </Fade>
                        ) : null;
                    })}
                </ol>
                <Box className="flex flex-col items-center mt-4">
                    <Button
                        className="block mx-auto mt-4"
                        variant="outlined"
                        onClick={handleShowMore}
                        sx={{
                            backgroundColor: '#282828',
                            color: 'white',
                        }}
                    >
                        {showAmount >= experienceList.length ? "Show Less" : "Show More"}
                    </Button>
                </Box>
            </section>

            {leetcodeProfile && (
                <section className="timeline">
                    <div className="titleWrapper">
                        <div className="iconBox">
                            <LeetcodeIcon
                                className="w-6 h-6 text-[rgb(255,219,112)]"
                            />
                        </div>
                        <h3 className="h3"> Leetcode</h3>
                    </div>
                    <LeetCodePieChart data={leetcodeProfile} windowWidth={width} className={`rounded-md h-${width <= 425 ? 90 : 72}`} />
                    <ContributionHeatMap data={leetcodeProfile.submissionCalendar} windowWidth={width}/>
                </section>
            )}

            <section className="timeline">
                <div className="titleWrapper">
                    <div className="iconBox">
                        <FontAwesomeIcon icon={FaSolid.faScrewdriverWrench} />
                    </div>
                    <h3 className="h3">Tools Box</h3>
                </div>
                {width >= 1024 ? <div>
                    <div className="toolSectionContainer">
                        <div className="h3 sectionTitle">
                            Frontend
                        </div>
                        <ul className="toolBoxList">
                            {toolBox.filter(item => item.category === 'Frontend').map((tool, index) => {
                                return (
                                    <li key={index} className="toolBoxItem">
                                        <div className="toolImageContainer">
                                            <img src={require(`../Asset/Resume/${tool.iconPath}`)} alt={tool.name}></img>
                                            <div className="toolName">{tool.name}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="toolSectionContainer">
                        <div className="h3 sectionTitle">
                            Backend
                        </div>
                        <ul className="toolBoxList">
                            {toolBox.filter(item => item.category === 'Backend').map((tool, index) => {
                                return (
                                    <li key={index} className="toolBoxItem">
                                        <div className="toolImageContainer">
                                            <img src={require(`../Asset/Resume/${tool.iconPath}`)} alt={tool.name}></img>
                                            <div className="toolName">{tool.name}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="toolSectionContainer">
                        <div className="h3 sectionTitle">
                            Cloud
                        </div>
                        <ul className="toolBoxList">
                            {toolBox.filter(item => item.category === 'Cloud').map((tool, index) => {
                                return (
                                    <li key={index} className="toolBoxItem">
                                        <div className="toolImageContainer">
                                            <img src={require(`../Asset/Resume/${tool.iconPath}`)} alt={tool.name}></img>
                                            <div className="toolName">{tool.name}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="toolSectionContainer">
                        <div className="h3 sectionTitle">
                            Tools
                        </div>
                        <ul className="toolBoxList">
                            {toolBox.filter(item => item.category === 'Tool').map((tool, index) => {
                                return (
                                    <li key={index} className="toolBoxItem">
                                        <div className="toolImageContainer">
                                            <img src={require(`../Asset/Resume/${tool.iconPath}`)} alt={tool.name}></img>
                                            <div className="toolName">{tool.name}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div> :
                    <div className="carousel">
                        <div className="track">
                            {toolBox.map((tool, index) => {
                                return (
                                    <li key={index} className="toolBoxItem">
                                        <div className="toolImageContainer">
                                            <img src={require(`../Asset/Resume/${tool.iconPath}`)} alt={tool.name}></img>
                                            <div className="toolName">{tool.name}</div>
                                        </div>
                                    </li>
                                )
                            })}
                            {toolBox.map((tool, index) => {
                                return (
                                    <li key={index} className="toolBoxItem">
                                        <div className="toolImageContainer">
                                            <img src={require(`../Asset/Resume/${tool.iconPath}`)} alt={tool.name}></img>
                                            <div className="toolName">{tool.name}</div>
                                        </div>
                                    </li>
                                )
                            })}
                        </div>
                    </div>}
            </section>
        </div>
    )
}