import "../Style/About.css"
import { serviceList, TestimonialsList, RecommendationLettersURL } from "../Asset/Data.js"
import defaultAvatar from "../Asset/defaultAvatar.png"
import quote from "../Asset/About/quote.svg";
import { useEffect, useRef, useState } from "react";
import PDFPreview from "../Component/PDFPreview.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as FaBrand from '@fortawesome/free-brands-svg-icons'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RecommendationLetterCard from "../Component/RecommendationLetterCard.js";


const responsive = {
    largeDesktop: {
        breakpoint: { max: 4000, min: 1250 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 1250, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2
    },
    smallTablet: {
        breakpoint: { max: 768, min: 580 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 580, min: 0 },
        items: 1
    }
};
export default function About() {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentModal, setCurrentModal] = useState(-1);
    const [previewModalOpen, setPreviewModalOpen] = useState(false);
    const [currentPreviewModal, setCurrenPreviewtModal] = useState(-1);
    const [width, setWidth] = useState(window.innerWidth);
    const [deviceRatio, setDeviceRatio] = useState(window.devicePixelRatio);

    const modalOpenRef = useRef(modalOpen);

    useEffect(() => {
        document.title = "Dung Hoang Le";
        modalOpenRef.current = modalOpen; // always update ref when modalOpen changes
    }, [modalOpen]);


    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                if (modalOpenRef.current === true) {
                    closeModal();
                }
            }
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("keydown", handleKeyDown);
        };

    }, []);


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const setModal = (index) => {
        setCurrentModal(index)
    }

    const handleModalClick = (index) => {
        setModal(index);
        toggleModal();
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    const togglePreviewModal = () => {
        setPreviewModalOpen(!previewModalOpen)
    }
    const setPreviewModal = (index) => {
        setCurrenPreviewtModal(index);
    }

    const handlePreviewModalClick = (index) => {
        setPreviewModal(index);
        togglePreviewModal();
    }

    const closePreviewModal = () => {
        setPreviewModalOpen(false);
    }
    return (
        <div className="pageContainer">
            <header>
                <h2 className=" h2 articleTitle">
                    About Me
                </h2>
            </header>
            <section className="aboutText">
                <p>
                    Hi, I'm Dung Le, a full-stack developer specializing in backend development (75% backend, 25% frontend) with experience in machine learning. I graduated from Washington State University with a degree in Computer Science and have been building scalable web applications for over four years
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
                    {serviceList.map((service, index) => {
                        return (
                            <li key={index} className="serviceItem">
                                <div className="serviceIconBox">
                                    <img src={require(`../Asset/About/${service.icon}`)} alt={service.text} width={55} />
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
            <section className="testimonials">
                <h3 className="h3 testimonialsTitle">Testimonials</h3>
                <ul className="testimonialsList has-scrollbar">
                    {TestimonialsList.map((testimonial, index) => {
                        return (
                            <li onClick={() => { handleModalClick(index) }} key={index} className="testimonialsItem">
                                <div className="contentCard">
                                    <figure className="testimonialsAvatarBox">
                                        <img alt={testimonial.name} src={testimonial.avatar === null ? defaultAvatar : require(`../Asset/${testimonial.avatar}`)} width={60} />
                                    </figure>
                                    <h4 className="h4 testimonialsItemTitle">
                                        {testimonial.name}
                                    </h4>
                                    <h6 className="h6 testimonialsRelationship"> {testimonial.relationship} at {testimonial.company}</h6>
                                    <div className="testimonialsText">
                                        {testimonial.paragraph.map((par, index) => {
                                            return (
                                                <p key={index}>
                                                    {par}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </section>
            {modalOpen ?
                <div className="modalContainer">
                    <div onClick={() => { closeModal() }} className="overlay" />
                    <section className="testimonialsModal">
                        <div className="modalImgWrapper">
                            <figure className="modalAvatarBox">
                                <img alt={TestimonialsList[currentModal].name} width={80} src={TestimonialsList[currentModal].avatar === null ? defaultAvatar : require(`../Asset/${TestimonialsList[currentModal].avatar}`)} />
                            </figure>
                            <img src={quote} alt="quote icon" />
                        </div>
                        <div className="modalContent">
                            <div className="modalInfo">
                                <h4 className="h3 modalTitle">{TestimonialsList[currentModal].name}</h4>
                                <a className="iconBox" href={TestimonialsList[currentModal].url}>
                                    <FontAwesomeIcon icon={FaBrand.faLinkedin} />
                                </a>
                            </div>
                            <h5 className="h5 modalPosition">{TestimonialsList[currentModal].position}</h5>
                            <time datetime={new Date(TestimonialsList[currentModal].datetime).toISOString().split('T')[0]}>{TestimonialsList[currentModal].datetime}</time>
                            {TestimonialsList[currentModal].paragraph.map((par, index) => {
                                return (
                                    <p key={index} className="modalParagraph">
                                        {par}
                                    </p>
                                )
                            })}
                        </div>
                    </section>
                </div> : <></>}
            <section className="achievements">
                <h3 className="h3 achievementsTitle">Achievements / Recomendations Letters</h3>
                {/* <ul className="achievementsList has-scrollbar">
                    {RecommendationLettersURL.map((url, index) => {
                        return (
                            <li onClick={() => { handlePreviewModalClick(index) }} key={index} className="achievementsItem">
                                <div className="achievementsOverlay">{url.name}</div>
                                <PDFPreview path={url.filePath} />
                            </li>
                        )
                    })}
                </ul> */}
                <Carousel
                    responsive={responsive}
                    key={width} 
                    arrows
                    showDots
                    swipeable
                    draggable
                    infinite={false}
                    keyBoardControl
                    containerClass="carouselContainer"
                    dotListClass="carouselDots"
                    itemClass="carouselItem"
                >
                    {RecommendationLettersURL.map((letter, index) => {
                        return (
                            <RecommendationLetterCard key={index} letter={letter} onClick={handlePreviewModalClick} index={index} />
                        )
                    })}
                </Carousel>
            </section>
            {previewModalOpen &&
                (<div className="modalContainer">
                    <div onClick={() => { closePreviewModal() }} className="overlay" />
                    <section className="testimonialsModal">
                        <PDFPreview
                            path={RecommendationLettersURL[currentPreviewModal].filePath}
                            scale={width > 1024 ? 3.5 : width > 768 ? 3 : width > 580 ? 2.27 : 1.8}
                        />
                    </section>
                </div>)}
        </div>
    )
}
