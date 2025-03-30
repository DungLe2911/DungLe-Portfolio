import { Route, Routes } from "react-router-dom";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Project from "./Page/Projects";
import Resume from "./Page/Resume";
import './Style/App.css'
import InfoCard from "./Component/InfoCard";
import NavBar from "./Component/NavBar";

function App() {
  return (
    <div className="App">
      <InfoCard />
      <div className="contentArea">
        <NavBar />
        <Routes>
          <Route path="/DungLe-Portfolio/" element ={<About />}/>
          <Route path="/DungLe-Portfolio/resume" element ={<Resume />}/>
          <Route path="/DungLe-Portfolio/project" element ={<Project />}/>
          <Route path="/DungLe-Portfolio/contact" element ={<Contact />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
