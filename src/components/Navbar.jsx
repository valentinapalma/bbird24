import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (    
      <div class="hamburger-menu">
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <ul class="menu__box">
        <li><a class="menu__item" href="/">Home</a></li>
        <li><a class="menu__item" href="applicants">Applicants</a></li>
        <li><a class="menu__item" href="aboutus">About Us</a></li>
        <li><a class="menu__item" href="employers">Employers</a></li>
        <li><a class="menu__item" href="Services">Services</a></li>
      </ul>
      </div>
  )
}

export default Navbar;


