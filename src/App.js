import './css/App.css';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import RecentProjects from './components/recent_projects';
import Skills from './components/skills';
import Contact from './components/contact';
import Tutorials from './components/tutorials';
import { NavLink } from 'react-router-dom';
import { Fade } from 'react-animation-components';

function App() {
  const HomePage = () => {
    return (
      <>
        <Fade in>
          <div className="home-container">
            <h1><strong>Welcome to my portfolio website!</strong></h1>
            <br></br>
            <p>I am a full-stack and mobile developer</p>
            <p>passionate in creating new and exciting technologies that help people.</p>
            {/* <div className="contact-btn">Connect</div> */}
          </div>
        </Fade>
        <div className="skills-block">
          <Skills />
        </div>
        <RecentProjects />
        <Contact />

      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <div className="web-title">richard kwon / web + mobile developer</div>
          <div className="link-container">
            <NavLink className="nav-link" to="/home" activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}>home</NavLink>
            {/* <NavLink className="nav-link" to="./recent_projects" activeStyle={{
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
            }}>contact</NavLink> */}
            <NavLink className="nav-link" to="./tutorials" activeStyle={{
              fontWeight: "bold",
              color: "black"
            }}>tutorials</NavLink>
          </div>
          <div className="row main-row">
            <div className="col">
              <Switch>
                <Route path='/home' component={HomePage} />
                {/* <Route path='/recent_projects' component={RecentProjects} />
                <Route path='/skills' component={Skills} /> */}
                <Route path='/tutorials' component={Tutorials} />
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
