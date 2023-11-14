import React, { useState } from 'react';
import {  FaBars,FaTimes,} from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#4942E4]  colo text-gray-300 z-40 '>
      <div>
        <h1  style={{ width: '200px', cursor:'pointer' } }>Ankit Sharma</h1>
      </div>

      <ul className='hidden md:flex'>
        <li className=' hover:text-black'>
          <Link to='home' smooth={true} duration={500}  >
            Home
          </Link>
        </li>
        <li className=' hover:text-black'>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-black'>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-black'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=' hover:text-black'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 right-0 w-55 h-screen bg-[#4a42e4b4] text-whitesmoke-600 flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
