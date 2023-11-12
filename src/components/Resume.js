import React, { useEffect } from 'react';
import data from "../data.json";

const Resume = () => {
    const { resume } = data;

    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    const outputData = () => {
        return resume.map((job, i) => {
            return outputSection(job);
        })
    }

    const outputSection = (job) => {
        console.log(job);
        return (
            <div className="job-section">
                <h3>{job.company}</h3>
                <h4>Role: {job.role}</h4>
                <p>{job.startDate} - {job.endDate}</p>
                <br/>
                <p><b>|Responsibilities|</b></p>
                <ul>
                    {job.responsibilities.map((task, i) => {
                        return <li key={i}>{task}</li>
                    })}
                </ul>
            </div>
        )
    }

    return (
        <div id="content-container" className="resume-container">
            <fieldset>
                <legend>Resume</legend>
                <h3>Experience</h3>
                {/* <p>Servco Pacific Inc.</p> */}
                {outputData()}
            </fieldset>
            
        </div>
    );
}

export default Resume;
