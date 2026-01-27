import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Style/Contact.css"
import * as FaSolid from '@fortawesome/free-solid-svg-icons'
import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


import "ol/ol.css";
import OLMap from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import {MouseWheelZoom, defaults as defaultInteractions } from "ol/interaction";
import { Style, Icon } from "ol/style";

export default function Contact() {
    const position = {
        lat: 30.832,
        lng: -83.279
    }
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    const [disabledSubmit, setDisabledSubmit] = useState(true);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = "Contact - Dung Hoang Le";
    }, []);


    useEffect(() => {
        const isValid = name.trim() !== "" && email.trim() !== "" && message.trim() !== "";
        setDisabledSubmit(!isValid);
    }, [name, email, message]);

    useEffect(() => {
        if (!mapContainerRef.current || mapRef.current) return;

        const center = fromLonLat([position.lng, position.lat]);

        // Marker feature
        const marker = new Feature({
            geometry: new Point(center),
        });

        const markerLayer = new VectorLayer({
            source: new VectorSource({ features: [marker] }),
            style: new Style({
                image: new Icon({
                    // simple inline SVG marker (no extra files needed)
                    src:
                        'data:image/svg+xml;utf8,' +
                        encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">
                <path d="M16 1C10.5 1 6 5.5 6 11c0 7.5 10 20 10 20s10-12.5 10-20C26 5.5 21.5 1 16 1z" fill="#d00"/>
                <circle cx="16" cy="11" r="4" fill="#fff"/>
              </svg>
            `),
                    anchor: [0.5, 1],
                    scale: 1,
                }),
            }),
        });

        const map = new OLMap({
            target: mapContainerRef.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                markerLayer,
            ],
            view: new View({
                center,
                zoom: 11,
            }),
            interactions: defaultInteractions({
                mouseWheelZoom: false,
            }).extend([
                new MouseWheelZoom({
                    duration: 100,
                    timeout: 25,
                    useAnchor: true,
                    constrainResolution: true,
                }),
            ])
        });

        mapRef.current = map;

        return () => {
            map.setTarget(undefined);
            mapRef.current = null;
        };
    }, [position.lat, position.lng]);

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
            setEmail("");
            setMessage("");
            setName("");
            toast.dismiss();
            toast.success("Message sent successfully! I'll get back to you soon.")
        } catch (e) {
            console.error("EmailJS Error:", e);
            toast.error("Failed to send message. Please try again later.");
        } finally {
            setLoading(false);
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
                    {/* OpenLayers mounts into this div */}
                    <div
                        ref={mapContainerRef}
                        style={{ width: "100%", height: "300px", borderRadius: "12px", overflow: "hidden" }}
                    />
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
