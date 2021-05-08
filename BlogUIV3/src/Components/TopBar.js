  
import React from 'react';
import "../Styles/TopBar.css";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function TopBar() {
    return (
        <header>
            <div className="top-bar">
                <div>
                    <Link to="/">Home</Link>
                    <span className="vertical-line"> | </span>
                    <Link to="/about">About Me</Link>
                    <span className="vertical-line"> | </span>
                    <Link to="/contact">Contact Me</Link>
                    <span className="vertical-line"> | </span>
                    <Link to="/newpost">New Post</Link>
                </div>
                <div className="right-positioned">
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </header>
    );
}

export default TopBar;