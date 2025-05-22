import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Contact.css"
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import * as FaSolid from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
export default function Contact() {
    const position = {
        lat: 30.832,
        lng: -83.279
    }
    const mapAPIKEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapID = process.env.REACT_APP_GOOGLE_MAPS_ID;
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const isValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
        setDisabledSubmit(!isValid);
    }, [name, email, message]);

    const handleSubmit = async () => {
        try {
            const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
            const body = {
                email,
                time: new Date().toLocaleString(),
                title: `Contact Request via Portfolio – Dung Le`,
                message,
                name,
                headers: {
                    'X-Priority': '1', // High priority (1=High, 3=Normal, 5=Low)
                    'X-MSMail-Priority': 'High',
                    'Importance': 'High',
                    'Priority': 'Urgent',
                    'X-GM-Labels': 'Important,Inbox'
                }
            }
            setLoading(true);
            const response = await emailjs.send(serviceID, templateID, body, publicKey);
            setLoading(false);
            setEmail("");
            setMessage("");
            setName("");
            toast.success("Message sent successfully! I'll get back to you soon.")
        } catch (e) {
            console.error("EmailJS Error:", e);
            toast.error("Failed to send message. Please try again later.");
        }
    }

    return (
        <div className="pageContainer">
            <header>
                <h2 className=" h2 articleTitle">
                    Contact
                </h2>
            </header>
            <section className="mapbox">
                <figure>
                    {/* <APIProvider apiKey={mapAPIKEY}>
                        <Map zoom={11} center={position} mapId={mapID}>
                            <AdvancedMarker position={position}></AdvancedMarker>
                        </Map>
                    </APIProvider> */}
                </figure>
            </section>
            <section className="contactForm">
                <h3 className="h3 formTitle"> Contact Form</h3>
                <div className="inputWrapper">
                    <input value={name} type="text" onChange={(e) => { setName(e.target.value) }} name="name" className="formInput" placeholder="Full name" required />
                    <input value={email} type="email" onChange={(e) => { setEmail(e.target.value) }} name="email" className="formInput" placeholder="Email address" required />
                </div>
                <textarea value={message} name="message" onChange={(e) => { setMessage(e.target.value) }} className="formInput" placeholder="Your Message" required />
                <button
                    className={disabledSubmit || loading ? 'formBtn' : 'formBtn valid'}
                    onClick={handleSubmit}
                    type="submit"
                    disabled={disabledSubmit || loading}
                >
                    {loading ? 'Sending...' : (
                        <>
                            <FontAwesomeIcon icon={FaSolid.faPaperPlane} />
                            <span>Send Message</span>
                        </>
                    )}
                </button>
            </section>
        </div>
    )
}
