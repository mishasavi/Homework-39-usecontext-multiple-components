import React from 'react';
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";

const Content = () => {
    return (
        <div className="body">
            <Sidebar/>
            <Feed/>
        </div>
    );
};

export default Content;