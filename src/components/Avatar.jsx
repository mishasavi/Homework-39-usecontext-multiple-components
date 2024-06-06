import React, {useContext, useState} from 'react';
import {UserContext} from "../utils/useContext.js";

const Avatar = ({size}) => {
    const [digitInUrl, setDigitInUrl] = useState(2);
    const {name, setName} = useContext(UserContext);
    const {image,setImage} = useContext(UserContext);

    const imgClickHandle = (e) => {
        if (e.button === 0) {
            setImage(`https://gravatar.com/avatar/${digitInUrl + 1}?d=monsterid`);
            setDigitInUrl(digitInUrl + 1);
        } else if (e.button === 2) {
            e.preventDefault();
            let newName = prompt ("Please enter a new name");
            if (newName) {setName (newName)}
        }
    }


    return (
        <img className={`userAvatar ${size ?? ""}`} alt="avatar" src={image}
             onMouseDown={imgClickHandle}
             onContextMenu={(e) => e.preventDefault()}
        />
    );
};

export default Avatar;