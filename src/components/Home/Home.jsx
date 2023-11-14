import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

import './Home.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <div className="content">
          <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>Hello I'm</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Ankit Sharma
          </h2>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Full Stack Developer.
          </h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
          </p>
          <div className="button-container">
            <Link to="work" smooth={true} duration={500}>
              <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4E4FEB] hover:border-[#4E4FEB] button-animation pr-45'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
            <a href={'skdfdsf'} download>
              <button className='text-white border-2 px-6 py-3 my-2 ml-4 flex items-center hover:bg-[#4E4FEB] hover:border-[#4E4FEB] button-animation'>
                Resume Download
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </a>
          </div>

         

        </div>
      </div>
    </div>
  );
};

export default Home;
