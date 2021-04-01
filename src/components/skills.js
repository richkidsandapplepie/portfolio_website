import React from 'react'
import { Fade, Stagger } from 'react-animation-components';
import '../skills.css';

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
        <img src="https://img.icons8.com/color/144/000000/html-5.png" />
        <img src="https://img.icons8.com/color/144/000000/css3.png" />
        <img src="https://img.icons8.com/color/144/000000/javascript.png" />
        <img src="https://img.icons8.com/color/144/000000/bootstrap.png" />
        <img src="https://img.icons8.com/color/144/000000/react-native.png" />
        <img src="https://img.icons8.com/color/144/000000/nodejs.png" />
        <img src="https://img.icons8.com/color/144/000000/flutter.png" />
      </Fade>
    </>
  );
}

export default Skills;