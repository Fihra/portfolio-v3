import React, { useEffect } from 'react';
import SkillCard from './SkillCard';

import data from "../data.json";

const About = () => {
    const { about, solo_headshot, skills } = data;

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

    const outputSkills = () => {
        const { languages, frameworks, tools } = skills[0];

        return (
            <>
                <section>
                    <div>
                        <h3>Languages</h3>
                        <ul>
                            {languages.map((language, i) => {
                                return <SkillCard key={i} props={language}/>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Frameworks</h3>
                        <ul>
                            {frameworks.map((framework, i) => {
                                return <SkillCard key={i} props={framework}/>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Tools</h3>
                        <ul>
                            {tools.map((tool, i) => {
                                return <SkillCard key={i} props={tool}/>
                            })}
                        </ul>
                    </div>
                </section>
            </>
        )
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
                    <img src={solo_headshot[0].pic} width={180} height={300} alt="solo-headshot"/>
                    <div className="about-text">
                        {outputData()}
                    </div>

                </div>
                <div className="skills-section">
                    {outputSkills()}
                </div>
            </fieldset>
        </div>
    );
}

export default About;
