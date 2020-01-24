import React from 'react';
import {Link} from 'react-router-dom';

const navbarComp = () => {

    return (
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <a class="navbar-brand" href="#">Neosoft</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

       
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link" to="/login">Login</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/register">Register</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/todo">ToDo tasks</Link>
              </li>    
            </ul>
          </div>  
        
      </nav>
    );
}

export default navbarComp;