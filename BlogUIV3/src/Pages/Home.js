import React from 'react';
import Posts from '../Components/Posts';
import Sidebar from '../Components/SideBar';

function Home () {
    return (
        <div>
            <label className="title"><h1>This  is my blog</h1></label>
            <div className="posts"><Posts/></div>
            <div className="side-bar"><Sidebar/></div>
        </div>
    );
}

export default Home;