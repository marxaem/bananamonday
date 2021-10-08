import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-transparent fixed-top py-0">
      <Link to="/bananamonday">
        <a className="navbar-brand" href="">
          <img src="https://cdn.discordapp.com/attachments/886838952689008663/896018120043536404/2.png" className="logo" />
        </a>
      </Link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item mx-2">
              <a class="nav-link" href="#about">About <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item mx-3">
              <a class="nav-link" href="#">Articles</a>
          </li>
          <li class="nav-item mr-3">
              <a class="nav-link btn btn-outline-light text-white" href="#">Subscribe</a>
          </li>
        </ul>
      </div>
    </nav>
    );
}
 
export default NavBar;