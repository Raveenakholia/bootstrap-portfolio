/** @format */

import React from 'react';

const SmartIndiaHackathon = () => {
  return (
    <div>
      <section class='py-5 bg-light'>
        <div class='container'>
          <h2 class='text-center mb-4'>Government Projects</h2>
          <p class='text-center text-muted mb-5'>
            A showcase of projects proudly delivered in collaboration with
            government bodies and public sector initiatives.
          </p>

          <div class='row g-4'>
            <div class='col-md-6 col-lg-4'>
              <div class='card h-100 border-0 shadow-sm'>
                <div class='card-body'>
                  <h5 class='card-title text-primary'>E-Governance Portal</h5>
                  <p class='card-text'>
                    Designed and developed an intuitive portal to streamline
                    citizen services, improving accessibility and efficiency.
                  </p>
                  <ul class='list-unstyled small mb-0'>
                    <li>
                      <i class='bi bi-calendar-event me-2 text-secondary'></i>{' '}
                      Completed: March 2025
                    </li>
                    <li>
                      <i class='bi bi-geo-alt me-2 text-secondary'></i> State
                      Government of XYZ
                    </li>
                  </ul>
                </div>
                <div class='card-footer bg-transparent border-0'>
                  <a
                    href='#'
                    class='btn btn-outline-primary btn-sm'>
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <div class='col-md-6 col-lg-4'>
              <div class='card h-100 border-0 shadow-sm'>
                <div class='card-body'>
                  <h5 class='card-title text-primary'>Smart City Dashboard</h5>
                  <p class='card-text'>
                    Built a real-time analytics dashboard for urban management,
                    supporting data-driven decisions for smart cities.
                  </p>
                  <ul class='list-unstyled small mb-0'>
                    <li>
                      <i class='bi bi-calendar-event me-2 text-secondary'></i>{' '}
                      Completed: December 2024
                    </li>
                    <li>
                      <i class='bi bi-geo-alt me-2 text-secondary'></i> National
                      Urban Development
                    </li>
                  </ul>
                </div>
                <div class='card-footer bg-transparent border-0'>
                  <a
                    href='#'
                    class='btn btn-outline-primary btn-sm'>
                    View Details
                  </a>
                </div>
              </div>
            </div>

            <div class='col-md-6 col-lg-4'>
              <div class='card h-100 border-0 shadow-sm'>
                <div class='card-body'>
                  <h5 class='card-title text-primary'>
                    Public Health Mobile App
                  </h5>
                  <p class='card-text'>
                    Developed a mobile app to help citizens access public health
                    resources and vaccination centers easily.
                  </p>
                  <ul class='list-unstyled small mb-0'>
                    <li>
                      <i class='bi bi-calendar-event me-2 text-secondary'></i>{' '}
                      Completed: August 2024
                    </li>
                    <li>
                      <i class='bi bi-geo-alt me-2 text-secondary'></i> Ministry
                      of Health
                    </li>
                  </ul>
                </div>
                <div class='card-footer bg-transparent border-0'>
                  <a
                    href='#'
                    class='btn btn-outline-primary btn-sm'>
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartIndiaHackathon;
