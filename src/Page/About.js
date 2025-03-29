import "../Style/About.css"
import { serviceList } from "../Asset/Data.js"

export default function About(){
    return(
        <div className="pageContainer">
            <header>
                <h2 className=" h2 articleTitle">
                    About Me
                </h2>
            </header>
            <section className="aboutText">
                <p>
                Hi, I'm Dung Le, a full-stack developer specializing in backend development (75% backend, 25% frontend) with experience in machine learning. I graduated from Washington State University in 2021 with a degree in Computer Science and have been building scalable web applications for over four years
                </p>
                <p>
                In my current role as an Inventory Control Specialist and Data Engineer at South Georgia Pecan Co., I bridge the gap between data and production efficiency. Using Python and MySQL, I clean and structure production data, ensuring accuracy while optimizing manufacturing workflows. Beyond data management, I analyze trends, plan production schedules, and develop strategies to improve efficiency on the factory floor
                </p>
                <p>
                Outside of my full-time job, I lead the tech side of BirdieAI, an AI-powered platform designed to support postpartum and pregnant women. Our goal is to leverage AI to provide personalized nutritional guidance, helping mothers and babies thrive
                </p>
                <p>
                I’m passionate about designing robust backend systems, optimizing infrastructure, and building scalable solutions. Whether it’s streamlining production data or developing AI-driven solutions, I love tackling complex problems and turning them into efficient, impactful solutions
                </p>
            </section>
            <section className="service">
                <h3 className="h3 serviceTitle">What I'm Doing</h3>
                <ul className="serviceList">
                    {serviceList.map((service, index)=>{
                        return(
                            <li key={index} className="serviceItem">
                                <div className="serviceIconBox">
                                    <img src={require(`../Asset/${service.icon}`)} alt={service.text} width={55}/>
                                </div>
                                <div className="serviceContentBox">
                                    <h4 className="h4 serviceTitle">{service.title}</h4>
                                    <p className="serviceText">{service.text}</p>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </div>
    )
}