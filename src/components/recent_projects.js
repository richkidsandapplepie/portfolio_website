import React, { Component } from 'react';
import '../css/recent.css';
import { Fade, Stagger } from 'react-animation-components';

const PROJECTS = [
  {
    id: 0,
    title: "moviebuff",
    overview: "A simple movie search website using to demonstrate React and the TMDB database.",
    image: "./images/moviebuff_logo.png",
    link: "https://eager-saha-a1ecac.netlify.app"
  },
  {
    id: 1,
    title: "tallyup",
    overview: "Made with Flutter using MobX. An easy way to manage game nights. The features include: dice, team randomizer, score keeper, and a timer.",
    image: "./images/tallyup_logo.png",
    link: "https://play.google.com/store/apps/details?id=io.cazjapp.tallyup"
  },
  {
    id: 2,
    title: "whatsyourfitness",
    overview: "A simple app made with Flutter for fitness calculations!",
    image: "./images/wyf_logo.jpg",
    link: "https://play.google.com/store/apps/details?id=io.richardhkwon.fitness_calculator"
  }
];

class RecentProjects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    }
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
                    <div key={project.id} className="col-md-6">
                      <div class="row project-card">
                        <div class="col-md-6">
                          <img className="projectImg" src={project.image}></img>
                        </div>
                        <div class="col-md-6">
                          <a href={project.link} target="_blank" 
                          className="title">{project.title}</a>
                          <hr></hr>
                          {/* <p className="details"><strong>Stack: </strong></p> */}
                          <p className="details">{project.overview}</p>
                        </div>
                      </div>
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