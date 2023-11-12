import React, { useEffect } from 'react';
import data from "../data.json";

const Experience = () => {
    const { experience, education, volunteer } = data;

    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    const outputJobs = () => {
        return experience.map((job, i) => {
            return jobSection(job, i);
        })
    }

    const jobSection = (job, i) => {
        return (
            <div className="job-section" key={i}>
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

    const outputSchools = () => {
        return education.map((school, i) => {
            return schoolSection(school, i);
        })
    }

    const schoolSection = (school, i) => {
        return(
            <div className="school-section" key={i}>
                <h3>{school.school_name} - {school.endDate}</h3>
                <h4>{school.location}</h4>
                <p>{school.focus}</p>
            </div>
        )
    }

    const outputVolunteers = () => {
        return volunteer.map((volunteership, i) => {
            return volunteerSection(volunteership, i);
        })
    }

    const volunteerSection = (volunteership, i) => {
        return(
            <div className="volunteer-section" key={i}>
                <h3>{volunteership.name} - {volunteership.endDate}</h3>
                <h4>{volunteership.location} - {volunteership.event}</h4>
                <p>{volunteership.description}</p>
            </div>
        )
    }

    return (
        <div id="content-container" className="experience-container">
            <fieldset>
                <legend>Experience/Education</legend>
                <h2>| Experience |</h2>
                {outputJobs()}
                <h2>| Education |</h2>
                {outputSchools()}
                <h2>| Volunteer |</h2>
                {outputVolunteers()}
            </fieldset>
            
        </div>
    );
}

export default Experience;
