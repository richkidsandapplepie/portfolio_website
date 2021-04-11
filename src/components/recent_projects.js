import { render } from '@testing-library/react';
import React, { Component } from 'react';
import '../css/recent.css';

const PROJECTS = [
  {
    title: "moviebuff",
    overview: "movie website",
    image: "./images_1.jpg"
  },
  {
    title: "tallyup",
    overview: "game night managing app",
    image: "./images_1.jpg"
  },
  {
    title: "what's your fitness",
    overview: "fitness calculator",
    image: "./images_1.jpg"
  }
];

class RecentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
      selectedProject: null
    }
  }

  renderSelectedProject(project) {
    if (project) {
      return (<div>success</div>);
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
        <div className="container list-container">
          <div className="row">
            <div className="col-md-3 list">
              <div className="list-item" onClick={() => this.selectProject('moviebuff')}>moviebuff</div>
            </div>
            <div className="col-md-9">
              {this.renderSelectedProject(this.state.selectedProject)}
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default RecentProjects;