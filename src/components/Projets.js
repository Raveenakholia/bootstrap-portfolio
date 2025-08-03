/** @format */

// src/components/Projects.js
import { useSelector } from 'react-redux';

function Projects() {
  const projects = useSelector((state) => state.projects.data);

  return (
    <div className='container my-5'>
      <h2>Projects</h2>
      <div className='row'>
        <section
          id='projects'
          class='py-5'>
          <div class='container'>
            <div class='text-center mb-5'>
              <h2 class='mb-3'>Featured Projects</h2>
              <p class='lead'>
                A showcase of real-world work powered by React, Redux,
                TypeScript & love 💛
              </p>
            </div>

            <div class='row g-4'>
              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <img
                    src='project1-thumbnail.jpg'
                    class='card-img-top'
                    alt='Project 1'
                  />
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>
                      DFCU Bank – Commercial Loan Origination System (CLOS)
                    </h5>
                    <p class='card-text'>
                      Delivered a tailored Commercial Loan Origination System
                      (CLOS) for DFCU Bank, designed to digitize and optimize
                      the complex workflows involved in commercial lending. The
                      system helps manage loan applications, approvals, and
                      documentation with increased speed and transparency.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-primary me-1'>NEMF</span>
                      <span class='badge bg-primary me-1'>Cordova</span>
                      <span class='badge bg-success me-1'>Jquery</span>
                      <span class='badge bg-info text-dark'>HTML</span>
                      <span class='badge bg-info text-dark'>CSS</span>
                    </div>
                  </div>
                  <div class='card-footer bg-transparent border-0 d-flex justify-content-between'>
                    <a
                      href='https://live-demo-link.com'
                      target='_blank'
                      class='btn btn-sm btn-outline-dark'>
                      Live Demo
                    </a>
                    <a
                      href='https://github.com/your-repo-link'
                      target='_blank'
                      class='btn btn-sm btn-outline-secondary'>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>

              <div class='col-md-6 col-lg-4'>
                <div class='card h-100 shadow-sm border-0'>
                  <img
                    src='project2-thumbnail.jpg'
                    class='card-img-top'
                    alt='Project 2'
                  />
                  <div class='card-body d-flex flex-column'>
                    <h5 class='card-title'>
                      Bank Muscat – Retail Loan Origination System (RLOS)
                    </h5>
                    <p class='card-text'>
                      Developed and delivered a robust Retail Loan Origination
                      System (RLOS) for Bank Muscat to streamline and automate
                      the end-to-end loan processing workflow. The project
                      focused on enhancing user experience, reducing processing
                      time, and ensuring compliance with banking standards.
                    </p>
                    <div class='mt-auto'>
                      <span class='badge bg-primary me-1'>NEMF</span>
                      <span class='badge bg-primary me-1'>Cordova</span>
                      <span class='badge bg-success me-1'>Jquery</span>
                      <span class='badge bg-info text-dark'>HTML</span>
                      <span class='badge bg-info text-dark'>CSS</span>
                    </div>
                  </div>
                  <div class='card-footer bg-transparent border-0 d-flex justify-content-between'>
                    <a
                      href='https://your-ecommerce-live.com'
                      target='_blank'
                      class='btn btn-sm btn-outline-dark'>
                      Live Demo
                    </a>
                    <a
                      href='https://github.com/your-ecommerce-repo'
                      target='_blank'
                      class='btn btn-sm btn-outline-secondary'>
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
