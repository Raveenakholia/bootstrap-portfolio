/** @format */

import React from 'react';
import RaveenaKholia from '../assets/RaveenaKholia.jpg';

const Body = () => {
  return (
    <div className='container my-5 '>
      <h1>I Build Legacies in Code and Craft.</h1>
      <p>
        They say code is logic — I say it’s poetry. With React and Redux in my
        toolkit and vision in my heart, I craft experiences that are fast,
        fluid, and unforgettable. My journey from building enterprise apps to
        creating a handmade homegrown brand proves one thing: I don’t just build
        — I build with meaning. Welcome to my digital kingdom.
      </p>
      <p className='fw-semibold'>
        If you're looking for someone who blends logic with soul — let's
        connect.
      </p>
      <div className='profile-pic'>
        <img
          src={RaveenaKholia}
          alt='Raveena Kholia'
          style={{ maxWidth: '240px' }}
        />
      </div>

      <div className='profile-section '>
        <section
          id='projects'
          class='py-5'>
          <div class='container'>
            <div
              class='text-center mb-5'
              style={{ color: 'white' }}>
              <h2 class='mb-3 '>Domain-Specific Chat Projects</h2>
              <p class='lead'>
                Conversational interfaces built with <strong>Chat.js</strong>{' '}
                for real-world industries
              </p>
            </div>

            <div class='row g-4'>
              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>Smart Banking Chatbot</h5>
                    <p class='card-text'>
                      An interactive chatbot UI built using{' '}
                      <strong>Chat.js</strong>, designed for retail banking
                      customers. Features include account info, loan inquiry,
                      and card support — all powered by Redux for state.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-info me-1'>Chat.js</span>
                      <span class='badge bg-primary me-1'>React</span>
                      <span class='badge bg-success'>Redux</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>Finance Advisor Chat Assistant</h5>
                    <p class='card-text'>
                      Built with <strong>Chat.js</strong>, this app provides
                      smart financial suggestions based on user inputs.
                      Integrated with market APIs, and uses Redux for managing
                      financial Q&A flows.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-info me-1'>Chat.js</span>
                      <span class='badge bg-primary me-1'>React</span>
                      <span class='badge bg-dark'>APIs</span>
                      <span class='badge bg-success'>Redux</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>Student Query Chatbot</h5>
                    <p class='card-text'>
                      A friendly AI assistant for students to ask course-related
                      questions. Built using <strong>Chat.js</strong> and Redux,
                      this chatbot helps navigate syllabus, assignments, and
                      deadlines.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-info me-1'>Chat.js</span>
                      <span class='badge bg-primary me-1'>React</span>
                      <span class='badge bg-secondary'>Education</span>
                      <span class='badge bg-success'>Redux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Body;
