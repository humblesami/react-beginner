import React from 'react';
import {render} from 'react-dom';

import Headra from './views/header';
import Footer from './views/footer';
import AfterFooter from './views/after-footer';

import Home from './views/home';
import Topics from './views/topic';
import {about2 ,about1} from './views/aboutus';

import createHistory from 'history/createBrowserHistory';
import { Link, Router, Route } from 'react-router-dom';

var dn_base_url = window.location.origin + "";

const history = createHistory();
var react_components_container = document.getElementById('react_dom_container');


    var routing_links_pages = (    
        <Router history={history}>    
            <div className="rendered-conatiner">
                <Headra/>
                <div className="page-wrapper-main">
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={about1} />
                    <Route path="/aboutclass" component={about2} />
                    <Route path="/topics" component={Topics} />
                </div>
                <Footer/>
                <div className="after-footer-html">
                    <div className="btn-back-to-top bg0-hov" id="myBtn">
                        <span className="symbol-btn-back-to-top">
                            <i className="fa fa-angle-double-up" aria-hidden="true"></i>
                        </span>
                    </div>
                            
                    <div id="dropDownSelect1"></div>
                    <div id="dropDownSelect2"></div>
                </div>
            </div>        
        </Router>
    );
    
    render(routing_links_pages,react_components_container);


    function loadscripts()
    {
        var doc_body = document.body;
        
        function loadScript(src) {
            var tag = document.createElement('script');
            tag.async = false;
            tag.src = dn_base_url + src;
            doc_body.append(tag);
        }

        dn_base_url += "/assets/";
        loadScript("vendor/animsition/js/animsition.min.js");
        loadScript("vendor/bootstrap/js/popper.js");
        loadScript("vendor/bootstrap/js/popper.js");
        loadScript("vendor/bootstrap/js/bootstrap.min.js");                
        loadScript("vendor/select2/select2.min.js");                
        loadScript("js/main.js");
        loadScript("js/custom.js");        
    }
    loadscripts();
    
    history.listen(function (locationo) {        
        //removing first occurance of '/'
        var locapth = location.pathname.replace('/','');        
        if(locapth.indexOf('/') == -1) //=>is a main route
        {
            $(window).scrollTop(0);
        }
    });