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
            <div className="header-title">Welcome to my portfolio!</div>
            <hr class="line"></hr>
            <p>• Follow my programming journey</p>
            <p>• I am a front-end and mobile developer</p>
            <p>• Looking for opportunities to make an impact</p>
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
  const Header = () => {
    return (
      <>
        <div className="web-title"><strong>richard kwon / web + mobile developer</strong></div>
        <div className="link-container">
          <NavLink className="nav-link" to="/home" activeStyle={{
            fontWeight: "bold",
            color: "black"
          }}>home</NavLink>
          <NavLink className="nav-link" to="./tutorials" activeStyle={{
            fontWeight: "bold",
            color: "black"
          }}>tutorials</NavLink>
        </div>
      </>
    );
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Header />
          <div className="row main-row">
            <div className="col">
              <Switch>
                <Route path='/home' component={HomePage} />
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
