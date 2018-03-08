import Home from './views/home';
import Topicter from './views/topic';
import React, { Component } from 'react';
import {about2 ,about1, about3} from './views/aboutus';
import { Link, BrowserRouter, Route } from 'react-router-dom';



  var linko = (    
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/aboutwithclass">About with Function</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>      
        <Route exact path="/" component={Home.a} />
        <Route path="/about" component={about1} />
        <Route path="/aboutwithclass" component={about2} />
        <Route path="/topics" component={Topicter} />  
      </div>
    </BrowserRouter>
    
  );

  export {
    linko
  }