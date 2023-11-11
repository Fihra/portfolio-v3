import React, { useState, useEffect } from 'react';
import * as emailjs from 'emailjs-com';
import data from '../data.json';

const Contact = () => {
    const initialFormState = {
        name: "",
        email: "",
        message: ""
    }

    const { description } = data.contact[0];

    const [contactData, setContactData] = useState({...initialFormState});

    const handleFormChange = (e) => {
        setContactData({
            ...contactData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            process.env.REACT_APP_SECRET_CODE,
            process.env.REACT_APP_TEMPLATE_CODE,
            e.target,
            process.env.REACT_APP_PUBLIC_KEY
        ).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
        setContactData({...initialFormState});
    }

    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    return (
        <div id="content-container" className="contact-container">
            <fieldset>
                <legend>Contact</legend>
                <p>{description}</p>
                <form id="contact-form" onSubmit={handleSubmit}>
                    <input type="text" onChange={handleFormChange} name="name" placeholder="Your name" value={contactData.name} required></input>
                    <input type="email" onChange={handleFormChange} name="email" placeholder="youremail@email.com" value={contactData.email} required></input>
                    <textarea onChange={handleFormChange} name="message" rows="4" cols="50" value={contactData.message} required>
                        Your message
                    </textarea>
                    <button type="submit" value="Submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default Contact;
