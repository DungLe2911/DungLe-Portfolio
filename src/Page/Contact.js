import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Contact.css"
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import * as FaSolid from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
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

    useEffect(() => {
        const isValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
        setDisabledSubmit(!isValid);
    }, [name, email, message]);

    const handleSubmit = () => {
        alert('hehehehe')
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
                <button className={ disabledSubmit ? 'formBtn' : 'formBtn valid'} onClick={handleSubmit} type="submit" disabled={disabledSubmit}>
                    <FontAwesomeIcon icon={FaSolid.faPaperPlane} />
                    <span>Send Message</span>
                </button>
            </section>
        </div>
    )
}
