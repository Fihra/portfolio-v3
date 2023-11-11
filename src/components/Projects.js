import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard';
import data from '../data.json';

const Projects = () => {
    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    const showProjects = () => {
        return data.projects.map((project, i) => {
            return <ProjectCard key={i} project={project}/>
        })
    }

    return (
        <div id="content-container" className="projects-container">
            <fieldset>
                <legend>Projects</legend>
                <div className="all-projects">
                    {showProjects()}
                </div>
            </fieldset>
        </div>
    );
}

export default Projects;
