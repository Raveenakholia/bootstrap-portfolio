/** @format */

// src/components/Projects.js
import { useSelector } from 'react-redux';

function Projects() {
  const projects = useSelector((state) => state.projects.data);

  return (
    <div className='container my-5'>
      <h2>Projects</h2>
      <div className='row'>
        {projects.map((project) => (
          <div
            className='col-md-4 mb-4'
            key={project.id}>
            <div className='card h-100 shadow-sm'>
              <div className='card-body'>
                <h5 className='card-title'>{project.title}</h5>
                <p className='card-text'>{project.description}</p>
                <a
                  href={project.link}
                  className='btn btn-outline-primary'
                  target='_blank'
                  rel='noopener noreferrer'>
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
