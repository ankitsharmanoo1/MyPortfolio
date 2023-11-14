import React from 'react';
import './About.css';
import ankit from '../../assets/ankit.png.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faLinkedin,faWhatsapp,faFacebook,faInstagram } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <div name="about" className="about">
  <div className="container">
    <h2>About Me</h2>
    <div className="content">
      <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8">
        <div className="about__me-image sm:order-1">
          <img src={ankit} alt="Ankit" />
        </div>
        <div className="sm:text-left sm:order-2 pt-10 pb-10">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 color-black">
            {/* About Me */}
          </p>

          <div className="paragraph-container">
            <p className="paragraph">



              "I'm Ankit Sharma, and I'm excited to be a web developer. I
                learned web development at Aeeron Academy, where I gained the
                 skills to create digital solutions. Now, I'm studying for a
                   Master of Computer Applications at Poornima University to
                   explore computer science further. As a full-stack developer, my
                 goal is to create great digital solutions that help people,
                   businesses, and organizations. I keep learning and using the
                  latest web technologies. I love working with teams to make
                  creative ideas come to life. I'm looking forward to
                   contributing to exciting digital projects as I continue in my
                   web development career."
            </p>

            <div className="social-media-icons">
             
              <a
                href="https://github.com/ankitsharmanoo1"
                target="_blank"
                rel="noopener noreferrer"

              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-sharma-a5a606275/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://www.linkedin.com/in/your-linkedin-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100013306382075&sk=abou"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a
                href="https://www.instagram.com/ankit_020201/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
    {/* <button className="text-white group border-2 px-6 py-3 my-2 flex items-center pl-89 justify-center hover:bg-[#4E4FEB] hover:border-[#4E4FEB] button-animation">
      Download CV
    </button> */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default About;


