import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
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
    title: "whatsyourfitness",
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
      return (
        <>
          <Card>
            <CardImg top width="100%" src={project.image} alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">{project.title}</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Stack: </CardSubtitle>
              <CardText>{project.overview}</CardText>
              <Button outline color="secondary">go to website</Button>
            </CardBody>
          </Card>
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
        <div className="container list-container">
          <div className="row">
            <div className="col-md-3 list">
              <div className="list-item" onClick={() => this.selectProject('moviebuff')}>moviebuff</div>
              <div className="list-item" onClick={() => this.selectProject('tallyup')}>tallyup</div>
              <div className="list-item" onClick={() => this.selectProject('whatsyourfitness')}>what's your fitness</div>
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