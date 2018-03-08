import React from 'react';
import {render} from 'react-dom';

import Home from './views/home';
import Topics from './views/topic';
import {about2 ,about1} from './views/aboutus';

import { Link, BrowserRouter, Route } from 'react-router-dom';

  var routing_links_pages = (    
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About with fun</Link>
          </li>
          <li>
            <Link to="/aboutclass">About with Calss</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>      
        <Route exact path="/" component={Home} />        
        <Route path="/about" component={about1} />
        <Route path="/aboutclass" component={about2} />
        <Route path="/topics" component={Topics} />  
      </div>
    </BrowserRouter>
    
  );

  //<Route exact path="/" component={Home.keyname1} />

  render(routing_links_pages,document.getElementById('any_container_for_react'))