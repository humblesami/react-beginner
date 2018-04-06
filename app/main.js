import React from 'react';
import {render} from 'react-dom';
import Home from './views/home';
import Topics from './views/topic';
import {about2 ,about1} from './views/aboutus';
import createHistory from 'history/createBrowserHistory';
import { Link, Router, Route } from 'react-router-dom';

var dn_base_url = window.location.origin + "";

$('head').append('<link href="'+dn_base_url+'/assets/css/main.css" rel="stylesheet" />');
$('head').append('<script src="'+dn_base_url+'/assets/service.js"><script/>');
ws_config.server_base_url = 'http://localhost:8000';

const history = createHistory();
var react_components_container = document.getElementById('react_dom_container');
//$('body').appe('<script src="'+dn_base_url+'/bundle.js"><script/>');

    var routing_links_pages = (    
        <Router history={history}>
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
        </Router>
    );

  history.listen(function (locationo) {        
    //removing first occurance of '/'
    var locapth = location.pathname.replace('/','');        
    if(locapth.indexOf('/') == -1) //=>Not a sub-route
        $(window).scrollTop(0);
  });
  
  render(routing_links_pages,react_components_container);
  
  

  

