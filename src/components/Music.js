import React, { useEffect } from 'react';
import { FaBandcamp } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import data from '../data.json';

const Music = () => {
    const { bandcamp, spotify, link } = data.music[0];
    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    const iconSize = '48px';

    return (
        <div id="content-container" className="music-container">
            <fieldset>
                <legend>Music</legend>
                <p>Check out my music here</p>
                <br/>
                <p>Music Site coming soon</p>
                <br/>
                <ul className="music-links">
                    <li><a href={bandcamp}><FaBandcamp size={iconSize} color={"white"}/></a></li>
                    <li><a href={spotify}><FaSpotify size={iconSize} color={"white"}/></a></li>
                    {/* <li><a href={bandcamp}><FaBandcamp size={iconSize}/></a></li> */}
                </ul>
            </fieldset>
        </div>
    );
}

export default Music;
