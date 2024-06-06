import React, {useContext} from 'react';
import {UserContext} from "../utils/useContext.js";

const Stats = () => {
    const {followers, setFollowers} = useContext(UserContext);
    const {following, setFollowing} = useContext(UserContext);
    const handleFollowers = (e) => {
        if (e.button === 0) {setFollowers(followers+1)}
        else if (e.button === 2) {setFollowers(followers-1)}
    }

    const handleFollowing = (e) => {
        if (e.button === 0) {setFollowing(following+1)}
        else if (e.button === 2) {setFollowing(following-1)}
    }

    return (
        <div className="followStats">
            <p onMouseDown={handleFollowers} onContextMenu={(e) => e.preventDefault()}>Followers: {followers}</p>
            <p onMouseDown={handleFollowing} onContextMenu={(e) => e.preventDefault()}>Following: {following}</p>
        </div>
    );
};

export default Stats;