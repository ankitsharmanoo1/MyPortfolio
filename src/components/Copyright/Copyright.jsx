import React from 'react';
import {  faGithub, faLinkedin,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Copyright = () => {
  return (
    <div className="copyright-container text-center py-4 bg-[#4942E4] text-white z-40">
      <p className="text-sm sm:text-md md:text-lg mb-2 text-white ">
        Designed and Developed By Ankit Sharma 
      </p>
      <p className='text-black'>
        Copyright &2023
      </p>
      <div className="flex justify-center space-x-4">
           <a
                href="https://github.com/ankitsharmanoo1"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-black'
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-sharma-a5a606275/"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-black'

              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
             
              <a
                href="https://www.facebook.com/profile.php?id=100013306382075&sk=abou"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-black'

              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/ankit_020201/"
                target="_blank"
                rel="noopener noreferrer"
                className='hover:text-black'

              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
      </div>
    </div>
  );
};

export default Copyright;
