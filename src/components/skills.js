import React from 'react'
import { Fade, Stagger } from 'react-animation-components';
import '../css/skills.css';

const images = [
  <img src="https://img.icons8.com/color/144/000000/html-5.png" />,
  <img src="https://img.icons8.com/color/144/000000/css3.png" />,
  <img src="https://img.icons8.com/color/144/000000/javascript.png" />,
  <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />,
  <img src="https://img.icons8.com/color/144/000000/react-native.png" />,
  <img src="https://img.icons8.com/color/144/000000/nodejs.png" />,
  <img src="https://img.icons8.com/color/144/000000/flutter.png" />
];

function Skills() {
  return (
    <>
      <Fade in>
        <div className="skills-container">
          <div className="skill-container">
            <div className="label">html</div>
            <img src="https://img.icons8.com/color/144/000000/html-5.png" />
          </div>
          <div className="skill-container">
            <div className="label">css</div>
            <img src="https://img.icons8.com/color/144/000000/css3.png" />
          </div>
          <div className="skill-container">
            <div className="label">javascript</div>
            <img src="https://img.icons8.com/color/144/000000/javascript.png" />
          </div>
          <div className="skill-container">
            <div className="label">bootstrap</div>
            <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />
          </div>
          <div className="skill-container">
            <div className="label">react / react native</div>
            <img src="https://img.icons8.com/color/144/000000/react-native.png" />
          </div>
          <div className="skill-container">
            <div className="label">node.js</div>
            <img src="https://img.icons8.com/color/144/000000/nodejs.png" />
          </div>
          <div className="skill-container">
            <div className="label">flutter</div>
            <img src="https://img.icons8.com/color/144/000000/flutter.png" />
          </div>
        </div>
      </Fade>
    </>
  );
}

export default Skills;