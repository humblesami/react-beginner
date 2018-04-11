import React from 'react';
import {render} from 'react-dom';
import Home from './views/home';
import Topics from './views/topic';
import {about2 ,about1} from './views/aboutus';

import Headra from './views/header';
import Footer from './views/footer';

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
            </div>        
        </Router>
    );

    history.listen(function (locationo) {        
        //removing first occurance of '/'
        var locapth = location.pathname.replace('/','');        
        if(locapth.indexOf('/') == -1) //=>Not a sub-route
        {
            $(window).scrollTop(0);
        }    
    });
  
    render(routing_links_pages,react_components_container);    

    $(function(){
        
        var desktop_menu = $(react_components_container).find(".container-menu-header");
        var hidden = desktop_menu.is(':hidden');
        //alert($('.container-menu-header').height());
        if(!hidden)
        {
            $('.compensation-container-menu-header').height($('.container-menu-header').height());
            $('.compensation-container-menu-header').show();             
        }
        else
        {
            $('.compensation-container-menu-header').hide();
        }
        var wh = $(window).height();
        var hh = $('.header-main').height();
        var fh = $('.footer-main').height();
        var mh = wh - hh - fh;
        //console.log(wh,hh,fh,mh);
        $('.page-wrapper-main').css('min-height',mh);
    });