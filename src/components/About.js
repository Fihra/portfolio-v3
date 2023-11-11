import React, { useEffect } from 'react';
import data from "../data.json";

const About = () => {
    const { about, solo_headshot } = data;

    const outputData = () => {
        return about.map((sentence, i) => {
            if(i >= about.length){
                return <p key={i}>{sentence}</p>
            } else {
                return(
                    <>
                        <p key={i}>{sentence}</p>
                        <br/>
                        <br/>
                    </>
                )
            }
        })
    }

    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    return (
        <div id="content-container" className="about-container">
            <fieldset>
                <legend>About</legend>
                <div className="about-section">
                    <img src={solo_headshot[0].pic} width={150} height={300}/>
                    <div className="about-text">
                    {outputData()}
                    </div>
                </div>
            </fieldset>
        </div>
    );
}

export default About;
