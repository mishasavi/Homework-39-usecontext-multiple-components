import React from 'react';
import Profile from "./Profile.jsx";
import Stats from "./Stats.jsx";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Profile/>
            <Stats/>
        </div>
    );
};

export default Sidebar;