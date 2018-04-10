import React from 'react';
import { Link, Router, Route } from 'react-router-dom';

var base_url = window.location.origin + "/assets/";

  function had() {
    return (
        <div className="header-main">
            <div className="container-menu-header">
                <div className="topbar">
                    <div className="topbar-social">
                        <Link to="#" className="topbar-social-item fa fa-facebook"></Link>
                        <Link to="#" className="topbar-social-item fa fa-instagram"></Link>
                        <Link to="#" className="topbar-social-item fa fa-pinterest-p"></Link>
                        <Link to="#" className="topbar-social-item fa fa-snapchat-ghost"></Link>
                        <Link to="#" className="topbar-social-item fa fa-youtube-play"></Link>
                    </div>

                    <span className="topbar-child1">
                        Free shipping for standard order over $100
                    </span>

                    <div className="topbar-child2">
                        <span className="topbar-email">
                            fashe@example.com
                        </span>

                        <div className="topbar-language rs1-select2">
                            <select className="selection-1" name="time">
                                <option>USD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="wrap_header">
                    
                    <Link to="/" className="logo">
                        <img src={base_url + "images/icons/logo.png"} alt="IMG-LOGO" />
                    </Link>

                    
                    <div className="wrap_menu">
                        <nav className="menu">
                            <ul className="main_menu"><li><Link to="/">Home</Link></li><li><Link to="/about">About with funny</Link></li><li><Link to="/aboutclass">About with Calss</Link></li><li><Link to="/topics">Topics</Link></li></ul>
                        </nav>
                    </div>

                    
                    <div className="header-icons">
                        <Link to="#" className="header-wrapicon1 dis-block">
                            <img src={base_url + "images/icons/icon-header-01.png"} className="header-icon1" alt="ICON" />
                        </Link>

                        <span className="linedivide1"></span>

                        <div className="header-wrapicon2">
                            <img src={base_url + "images/icons/icon-header-02.png"} className="header-icon1 js-show-header-dropdown" alt="ICON" />
                            <span className="header-icons-noti">0</span>

                            
                            <div className="header-cart header-dropdown">
                                <ul className="header-cart-wrapitem">
                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src={base_url + "images/icons/icon-header-01.png"} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <Link to="#" className="header-cart-item-name">
                                                White Shirt With Pleat Detail Back
                                            </Link>

                                            <span className="header-cart-item-info">
                                                1 x $19.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src={base_url + "images/icons/icon-header-01.png"} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <Link to="#" className="header-cart-item-name">
                                                Converse All Star Hi Black Canvas
                                            </Link>

                                            <span className="header-cart-item-info">
                                                1 x $39.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src={base_url + "images/icons/icon-header-01.png"} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <Link to="#" className="header-cart-item-name">
                                                Nixon Porter Leather Watch In Tan
                                            </Link>

                                            <span className="header-cart-item-info">
                                                1 x $17.00
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="header-cart-total">
                                    Total: $75.00
                                </div>

                                <div className="header-cart-buttons">
                                    <div className="header-cart-wrapbtn">
                                        
                                        <Link to="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            View Cart
                                        </Link>
                                    </div>

                                    <div className="header-cart-wrapbtn">
                                        
                                        <Link to="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            Check Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="compensation-container-menu-header"></div>

            
            <div className="wrap_header_mobile">
                
                <Link to="/" className="logo-mobile">
                    <img src={base_url + "images/icons/logo.png"} alt="IMG-LOGO" />
                </Link>

                
                <div className="btn-show-menu">
                    
                    <div className="header-icons-mobile">
                        <Link to="#" className="header-wrapicon1 dis-block">
                            <img src={base_url + "images/icons/icon-header-01.png"} className="header-icon1" alt="ICON" />
                        </Link>

                        <span className="linedivide2"></span>

                        <div className="header-wrapicon2">
                            <img src={base_url + "images/icons/icon-header-02.png"} className="header-icon1 js-show-header-dropdown" alt="ICON" />
                            <span className="header-icons-noti">0</span>

                            
                            <div className="header-cart header-dropdown">
                                <ul className="header-cart-wrapitem">
                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src={base_url + "images/icons/icon-header-01.png"} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <Link to="#" className="header-cart-item-name">
                                                White Shirt With Pleat Detail Back
                                            </Link>

                                            <span className="header-cart-item-info">
                                                1 x $19.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src={base_url + "images/icons/icon-header-01.png"} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <Link to="#" className="header-cart-item-name">
                                                Converse All Star Hi Black Canvas
                                            </Link>

                                            <span className="header-cart-item-info">
                                                1 x $39.00
                                            </span>
                                        </div>
                                    </li>

                                    <li className="header-cart-item">
                                        <div className="header-cart-item-img">
                                            <img src={base_url + "images/icons/icon-header-01.png"} alt="IMG" />
                                        </div>

                                        <div className="header-cart-item-txt">
                                            <Link to="#" className="header-cart-item-name">
                                                Nixon Porter Leather Watch In Tan
                                            </Link>

                                            <span className="header-cart-item-info">
                                                1 x $17.00
                                            </span>
                                        </div>
                                    </li>
                                </ul>

                                <div className="header-cart-total">
                                    Total: $75.00
                                </div>

                                <div className="header-cart-buttons">
                                    <div className="header-cart-wrapbtn">
                                        
                                        <Link to="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            View Cart
                                        </Link>
                                    </div>

                                    <div className="header-cart-wrapbtn">
                                        
                                        <Link to="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                                            Check Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </div>
                </div>
            </div>

            
            
            
            <div className="wrap-side-menu">
                <nav className="side-menu">
                    <ul className="main-menu">
                        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                            <span className="topbar-child1">
                                Free shipping for standard order over $100
                            </span>
                        </li>

                        <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
                            <div className="topbar-child2-mobile">
                                <span className="topbar-email">
                                    fashe@example.com
                                </span>

                                <div className="topbar-language rs1-select2">
                                    <select className="selection-1 select2-hidden-accessible" name="time" tabIndex="-1" aria-hidden="true">
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                </div>
                            </div>
                        </li>

                        <li className="item-topbar-mobile p-l-10">
                            <div className="topbar-social-mobile">
                                <Link to="#" className="topbar-social-item fa fa-facebook"></Link>
                                <Link to="#" className="topbar-social-item fa fa-instagram"></Link>
                                <Link to="#" className="topbar-social-item fa fa-pinterest-p"></Link>
                                <Link to="#" className="topbar-social-item fa fa-snapchat-ghost"></Link>
                                <Link to="#" className="topbar-social-item fa fa-youtube-play"></Link>
                            </div>
                        </li>

                        <li className="item-menu-mobile"><Link to="/">Home</Link></li>
                        <li className="item-menu-mobile"><Link to="/about">About with funny</Link></li>
                        <li className="item-menu-mobile"><Link to="/aboutclass">About with Calss</Link></li>
                        <li className="item-menu-mobile"><Link to="/topics">Topics</Link></li>
                    </ul>
                </nav>
            </div>                        
        </div>
    );
  }
  
  export default  had;