import React from 'react';
import '../../css/general/Contact.css';

function Contact() {
  return (
    <div id='contact'>
      <div className='about'>
        <img src='/imgs/self.jpg' alt='' />

        <h1>Hello!</h1>
        <h2>Nice to meet you.</h2>

        <p>
          I'm <span>Sarina</span>! A web developer, graphic designer, and
          illustrator based in NYC.
        </p>
        <p>I like to eat, game, and sleep. That's kind of it.</p>
        <p>
          I hold degrees in Graphic Design and Art History, and a certification
          from The Grace Hopper Program at Fullstack Academy.
        </p>
        <div className='contact-btns'>
          <a
            href='mailto:sarinachang7@gmail.com'
            rel='noopener noreferrer'
            target='_blank'
          >
            Email
          </a>
          <a
            href='/imgs/Resume.pdf'
            aria-label='resume'
            rel='noopener noreferrer'
            target='_blank'
          >
            Resume
          </a>
        </div>
        <div className='contact-footer'>
          <a
            href={'https://github.com/s-arina'}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 24 24'
              fill='none'
              stroke='red'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-github'
            >
              <title>GitHub</title>
              <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
            </svg>
          </a>{' '}
          <a
            href={'https://linkedin.com/in/sarinachang'}
            target='_blank'
            rel='noreferrer'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 24 24'
              fill='none'
              stroke='red'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-linkedin'
            >
              <title>LinkedIn</title>
              <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
              <rect x='2' y='9' width='4' height='12'></rect>
              <circle cx='4' cy='4' r='2'></circle>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
