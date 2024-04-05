import React, { useEffect } from "react";
import "../Style/Home.css"
// import BackgroundImg from '../Picture/HomeBackground.jpg'
//using font from google for mono space.
import "@fontsource/source-code-pro"; // Defaults to weight 400
import "@fontsource/source-code-pro/400.css"; // Specify weight
import "@fontsource/source-code-pro/400-italic.css"; 
import hill1 from '../Picture/hill1.png'
import hill2 from '../Picture/hill2.png'
import hill3 from '../Picture/hill3.png'
import hill4 from '../Picture/hill4.png'
import hill5 from '../Picture/hill5.png'

//reference video from Kevin Powell: https://www.youtube.com/watch?v=w1nhwUGsG6M&t=66s 
// adding parralax effect for homepage: https://www.youtube.com/watch?v=kmM6mqvnxcs
// use picsart ai extend image to extend missing parts of mountain: https://picsart.com/ai-image-extender/

export default function Home(){
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            let value = window.scrollY;
            let mtn3 = document.getElementById("hill3");
            let mtn4 = document.getElementById("hill4");
            let text = document.querySelector('.textArea');
            mtn3.style.left = value*-0.125 + 'px'; 
            mtn4.style.left = value*0.125 + 'px'; 
            text.style.top = `calc(${value*0.65}px + 15%)`; //15% based on the original top position of text area
        })
    },[])


    return(
        <div className="HomePageContainer">
            <img src={hill5} alt="hill5" id="hill5" />

            <div className="textArea">
                <div className="text">Hello, my name is Dung Hoang Le</div>
                <div className="subtitle">Welcome to my website!</div>
            </div>

            <img src={hill4} alt="hill4" id="hill4" />
            <img src={hill3} alt="hill3" id="hill3" />
            <img src={hill2} alt="hill2" id="hill2" />
            <img src={hill1} alt="hill1" id="hill1" />
            {/* <div className="overlay"></div> */}
        </div>
    );
}