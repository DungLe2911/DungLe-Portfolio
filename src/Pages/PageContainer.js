import About from "./About";
import Home from "./Home";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

const containerStyle = {
    overflowX: "hidden",
    overflowY: "scroll", //enable ability for scrolling
    //rest is hiding the appearance of the scroll bar
    height: "100vh",
    scrollbarWidth: "none", // For Firefox
    "msOverflowStyle": "none", // For IE/Edge
    "::WebkitScrollbar": {
        display: 'none',
    }
  };


export default function PageContainer(){
    return(
    <div style={containerStyle}>
        <Home/>
        <About/>
        <Resume/>
        <Projects/>
        <Contact/>
    </div>
    )
};