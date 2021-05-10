import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecentProjects from './components/recent_projects';
import Skills from './components/skills';
import Contact from './components/contact';
import { NavLink } from 'react-router-dom';

function App() {
  const HomePage = () => {
    return (
      <div className="home-container">I'm a software developer.</div>
    );
  }
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="title">richard kwon / web + mobile developer</div>
          <div className="link-container">
            <NavLink className="nav-link" to="/home" activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}>about</NavLink>
            <NavLink className="nav-link" to="./recent_projects" activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}>recent projects</NavLink>
            <NavLink className="nav-link" to="./skills" activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}>skills</NavLink>
            <NavLink className="nav-link" to="./contact" activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}>contact</NavLink>
          </div>
          <div className="row main-row">
            <div className="col">
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
