/** @format */

const SmartIndiaHackathon = () => {
  return (
    <div
      id='projectCarousel'
      className='carousel slide carousel-fade'
      data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#projectCarousel'
          data-bs-slide-to='0'
          className='active'
          aria-current='true'
          aria-label='Slide 1'></button>
        <button
          type='button'
          data-bs-target='#projectCarousel'
          data-bs-slide-to='1'
          aria-label='Slide 2'></button>
        <button
          type='button'
          data-bs-target='#projectCarousel'
          data-bs-slide-to='2'
          aria-label='Slide 3'></button>
      </div>

      <div className='carousel-inner rounded-4 shadow-lg'>
        <div className='carousel-item active'>
          <img
            src='/images/hackathon1.jpg'
            className='d-block w-100'
            alt='Smart India Hackathon Project 1'
          />
          <div className='carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2'>
            <h5>Smart India Hackathon 2023</h5>
            <p>Our AI-based traffic management solution.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='/images/hackathon2.jpg'
            className='d-block w-100'
            alt='Smart India Hackathon Project 2'
          />
          <div className='carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2'>
            <h5>Problem Solving at Scale</h5>
            <p>Addressing real-world public service challenges.</p>
          </div>
        </div>
        <div className='carousel-item'>
          <img
            src='/images/hackathon3.jpg'
            className='d-block w-100'
            alt='Smart India Hackathon Project 3'
          />
          <div className='carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2'>
            <h5>Innovative UI/UX</h5>
            <p>Built using React, Node.js and cloud services.</p>
          </div>
        </div>
      </div>

      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#projectCarousel'
        data-bs-slide='prev'>
        <span
          className='carousel-control-prev-icon'
          aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#projectCarousel'
        data-bs-slide='next'>
        <span
          className='carousel-control-next-icon'
          aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};

export default SmartIndiaHackathon;
