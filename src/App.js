import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import MenuBar from './Component/MenuBar';
import './Style/App.css';
import PageContainer from './Pages/PageContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar/>
        <Switch>
          <Route exact path="/DungLe-Portfolio" component={PageContainer}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
