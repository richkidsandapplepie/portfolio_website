import React, { Component } from 'react'
import { Fade } from 'react-animation-components';
import '../css/skills.css';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tech: [
        {
          label: 'html',
          img: "https://img.icons8.com/color/144/000000/html-5.png"

        },
        {
          label: 'css',
          img: "https://img.icons8.com/color/144/000000/css3.png"

        },
        {
          label: 'javascript',
          img: "https://img.icons8.com/color/144/000000/javascript.png"


        },
        {
          label: 'bootstrap',
          img: "https://img.icons8.com/color/144/000000/bootstrap.png"

        },
        {
          label: "react/react-native",
          img: "https://img.icons8.com/color/144/000000/react-native.png"

        },
        {
          label: "node.js",
          img: "https://img.icons8.com/color/144/000000/nodejs.png"

        },
        {
          label: "flutter",
          img: "https://img.icons8.com/color/144/000000/flutter.png"
        }
      ]
    };
  }

  render() {
    const skills = this.state.tech.map(item => (
      <div className="col-sm-12 col-md-2">
        <div className="skill-container">
          <div className="label">{item.label}</div>
          <img src={item.img}></img>
        </div>
      </div>
    ));
    return (
      <>
        <Fade in>
          <div className="skills-container">
            <div className="row">
              {skills}
            </div>
          </div>
        </Fade>
      </>
    );
  }

}

export default Skills;