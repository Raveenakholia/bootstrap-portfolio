/** @format */

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ME from '../assets/ME.jpeg';

// 2. Import the specific icon you want to use
import {
  faCoffee,
  faCheckCircle,
  faAlignRight,
  faLinkedinSquare,
} from '@fortawesome/free-solid-svg-icons';

const handleOnClickFunctionlity = () => {};
const About = () => {
  return (
    <div className='container my-5'>
      <section
        class='container py-5'
        id='about'>
        <div class='row align-items-center'>
          <div class='col-lg-6 mb-4 mb-lg-0'>
            <img
              src={ME}
              alt='Raveena Kholia'
              class='img-fluid rounded shadow'
            />
          </div>
          <div class='col-lg-6'>
            <h2 class='mb-4'>About Me</h2>
            <p class='lead'>
              I’m <strong>Raveena Kholia</strong>, a Front-End Developer,
              Storyteller, and Founder of <em>Threaded Legacy</em>. With over 6
              years of experience building seamless, scalable interfaces using
              React, Redux, TypeScript, and Bootstrap, I believe great design is
              both <strong>functional and emotional</strong>.
            </p>
            <p>
              My journey is rooted in heritage, driven by purpose. Whether I’m
              crafting an intuitive user experience or curating handmade art
              through my family-run brand,{' '}
              <strong>I build with intention</strong>.
            </p>
            <p>
              Every line of code and every thread I weave is a piece of a bigger
              picture: a digital world that feels human, and a legacy that feels
              alive.
            </p>
            <a
              href='/src/components/Achievements.js'
              class='btn btn-dark mt-3'
              onClick={handleOnClickFunctionlity}>
              Let’s Build Something Meaningful
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
