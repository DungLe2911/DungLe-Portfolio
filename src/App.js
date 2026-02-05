import { Navigate, Route, Routes } from "react-router-dom";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Project from "./Page/Projects";
import Resume from "./Page/Resume";
import './Style/App.css'
import InfoCard from "./Component/InfoCard";
import NavBar from "./Component/NavBar";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div className="App">
      <InfoCard />
      <ToastContainer closeOnClick limit={1} />
      <div className="contentArea">
        <NavBar />
        <Routes>
          <Route path="/" element ={<About />}/>
          <Route path="/resume" element ={<Resume />}/>
          <Route path="/project" element ={<Project />}/>
          <Route path="/contact" element ={<Contact />}/>
        </Routes>
        <div className="copyright">
          Work inspired by &nbsp; 
          <a href="https://codewithsadee.github.io/vcard-personal-portfolio/" target="_blank" rel="noopener noreferrer">© Richard Hanrick</a>
        </div>
      </div>
    </div>
  );
}

export default App;
