import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../css/recent.css';
import { Fade, Stagger } from 'react-animation-components';

const PROJECTS = [
  {
    title: "moviebuff",
    overview: "movie website",
    image: "./images_1.jpg"
  },
  {
    title: "tallyup",
    overview: "game night managing app",
    image: "./images/tallyup_logo.png"
  },
  {
    title: "whatsyourfitness",
    overview: "fitness calculator",
    image: "./images/wyf_logo.jpg"
  }
];

class RecentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      selectedProject: null,
    }
  }

  renderSelectedProject(project) {
    if (project) {
      return (
        <>
          <div className="col-md-3">
            <img className="projectImg" src={project.image}></img>
          </div>
          <div className="col-md-3">
            {project.title}
            <p>Stack: </p>
            <p>{project.overview}</p>
            <div className="link-button">go to website</div>
          </div>
        </>
      );
    } else {
      return (<div>select a project</div>);
    }
  }

  selectProject = (title) => {
    const project = this.state.projects.filter(item => item.title === title)[0];
    this.setState({ selectedProject: project });
    console.log(this.state.selectedProject);
  }

  render() {
    return (
      <>
        <Fade in>
          <div className="container list-container">
            <div className="row">
              <div className="col-md-4 list">
                <Stagger in>
                  {PROJECTS.map(project =>
                    <Fade in>
                      <div className="list-item" onClick={() => this.selectProject(project.title)}>{project.title}</div>
                    </Fade>
                  )
                  }
                </Stagger>
              </div>
              {this.renderSelectedProject(this.state.selectedProject)}
            </div>
          </div>
        </Fade>
      </>
    );
  }

}

export default RecentProjects;