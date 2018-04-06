import React from 'react';
import {render} from 'react-dom';

import Home from './views/home';
import Topics from './views/topic';
import {about2 ,about1} from './views/aboutus';

import { Link, BrowserRouter, Route } from 'react-router-dom';

var dn_base_url = window.location.origin + "";

$('head').append('<link href="'+dn_base_url+'/assets/css/main.css" rel="stylesheet" />');
$('head').append('<script src="'+dn_base_url+'/assets/service.js"><script/>');
ws_config.server_base_url = 'http://localhost:8000';

var react_components_container = $('#react_dom_container')[0];

  var routing_links_pages = (    
    <BrowserRouter>
      <div className="outer-most">
        <header>
          <ul className="navbar-main">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About with funny</Link>
            </li>
            <li>
              <Link to="/aboutclass">About with Calss</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </header>        
        <div className="page-wrapper-main">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={about1} />
          <Route path="/aboutclass" component={about2} />
          <Route path="/topics" component={Topics} />
        </div>        
        <footer>Foot</footer>
      </div>
    </BrowserRouter>    
  );
  
  render(routing_links_pages,react_components_container);
  
  

  

