import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import MenuBar from './Component/MenuBar';
import './Style/App.css';
import PageContainer from './Pages/PageContainer';
import { useState } from 'react';
import * as icoSolid from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useWindowDimensions from './CustomHooks/HandleResize';
import { useEffect } from 'react';

function App() {
  const[isNavBarDisplay,setNavBar] = useState(true);
  const{width} = useWindowDimensions();
  const menuBtnIcon = isNavBarDisplay ? icoSolid.faBars : icoSolid.faTimes;
  const handleMenuBtn = () =>{
    setNavBar(!isNavBarDisplay)
    if(isNavBarDisplay){
      const navbar = document.querySelector(".MenuBarContainer");
      navbar.classList.add('open');
    }else{
      const navbar = document.querySelector(".MenuBarContainer");
      navbar.classList.remove('open');
    }
    console.log("testing")
  }
  // componentdidMount
  useEffect(()=>{
    const menuBtn = document.querySelector(".MenuBtn");
    const navbar = document.querySelector(".MenuBarContainer");
    if(width < 1200){//for mobile
      menuBtn.style.visibility = 'visible';
      // if navbar is in display, hide it
      if(isNavBarDisplay){
        navbar.classList.remove('open');
        setNavBar(false);
      } 
    }else{//for desktop
      menuBtn.style.visibility = 'hidden';
      // if navbar is hidding, show it
      if(!isNavBarDisplay){
        navbar.classList.add('open');
        setNavBar(true);
      }
    }
  },[width]);
  return (
    <div className="App">
      <Router>
        <div className='MenuBtn' onClick={handleMenuBtn}>
          <FontAwesomeIcon id="MenuBtnIcon" icon={menuBtnIcon} size='2x'/>
        </div>
        <MenuBar/>
        <Switch>
          <Route exact path="/DungLe-Portfolio" component={PageContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
