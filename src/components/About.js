import React, { useEffect } from 'react';
import data from "../data.json";

const About = () => {
    const { about } = data;

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
                {outputData()}
            </fieldset>
        </div>
    );
}

export default About;
