import React, { Component } from 'react';
import '../css/recent.css';
import { Fade, Stagger } from 'react-animation-components';

const PROJECTS = [
  {
    id: 0,
    title: "moviebuff",
    overview: "movie website",
    image: "./images/tallyup_logo.png"
  },
  {
    id: 1,
    title: "tallyup",
    overview: "game night managing app",
    image: "./images/tallyup_logo.png"
  },
  {
    id: 2,
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
    }
  }

  renderSelectedProject(project) {
    if (project) {
      return (
        <>
          <div key={project.id} className="col-md-3">
            <img className="projectImg project-card" src={project.image}></img>
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

  renderProjects() {
    const projects = this.state.projects;
    const projectList = projects.map(project => {
      return (
        <>
          <Fade in>
            <div className="row">
              <div key={project.id} className="col-md-3">
                <img className="projectImg project-card" src={project.image}></img>
              </div>
              <div className="col-md-3">
                {project.title}
                <p>Stack: </p>
                <p>{project.overview}</p>
                <div className="link-button">go to website</div>
              </div>
            </div>
          </Fade>
        </>
      );
    });
    return projectList;
  }

  selectProject = (title) => {
    const project = this.state.projects.filter(item => item.title === title)[0];
    this.setState({ selectedProject: project });
    console.log(this.state.selectedProject);
  }

  render() {
    return (
      <>
        <div className="page-title">Some Things I've Built:</div>
        <div className="container list-container">
          <Stagger in>
            {PROJECTS.map(project => {
              return (
                <Fade in>
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div key={project.id} className="col-md-3">
                      <img className="projectImg project-card" src={project.image}></img>
                    </div>
                    <div className="col-md-3">
                      <a className="title">{project.title}</a>
                      <hr></hr>
                      <p>Stack: </p>
                      <p>{project.overview}</p>
                    </div>
                  </div>
                </Fade>
              );
            })}
          </Stagger>
        </div>
      </>
    );
  }
}

export default RecentProjects;