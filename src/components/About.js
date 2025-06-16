/** @format */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// 2. Import the specific icon you want to use
import {
  faCoffee,
  faCheckCircle,
  faAlignRight,
} from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className='container my-5'>
      <header>
        <p>Circle</p>
        <FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
        <p>contact us</p>
      </header>
    </div>
  );
};

export default About;
