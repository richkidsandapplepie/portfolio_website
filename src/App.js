import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecentProjects from './components/recent_projects';
import Skills from './components/skills';
import Contact from './components/contact';
import { NavLink } from 'react-router-dom';

function App() {
  const HomePage = () => {
    return (
      <p>hi there</p>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="row main-row">
            <div className="col-3 first-col">
              <div className="link-container">
                <NavLink className="nav-link" to="./recent_projects" activeStyle={{
    color: "white"
  }}>Recent Projects</NavLink>
                <NavLink className="nav-link" to="./skills" activeStyle={{
    color: "white"
  }}>Skills</NavLink>
                <NavLink className="nav-link" to="./contact" activeStyle={{
    color: "white"
  }}>Contact</NavLink>
              </div>
            </div>
            <div className="col-9">
              <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/recent_projects' component={RecentProjects} />
                <Route path='/skills' component={Skills} />
                <Route path='/contact' component={Contact} />
                <Redirect to='/home' />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
