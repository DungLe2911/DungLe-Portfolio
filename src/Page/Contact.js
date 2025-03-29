import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Contact.css"
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps"
import * as FaSolid from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
export default function Contact(){
    const position = {
        lat:30.832,
        lng: -83.279
    }
    const mapAPIKEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapID = process.env.REACT_APP_GOOGLE_MAPS_ID;
    const [enableSubmit, setEnableSubmit] = useState(true);
    return(
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
                <form action="#" className="form">
                    <div className="inputWrapper">
                        <input type="text" name="fullname" className="formInput" placeholder="Full name" required />
                        <input type="email" name="email" className="formInput" placeholder="Email address" required />
                    </div>
                    <textarea name="message" className="formInput" placeholder="Your Message" required  />
                    <button className="formBtn" type="submit" disabled={enableSubmit}>
                        <FontAwesomeIcon icon={FaSolid.faPaperPlane}/>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </div>
    )
}