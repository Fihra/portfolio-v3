import React, { useContext } from 'react';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Games from './Games';
import Projects from './Projects';
import Music from './Music';
import { MainContext } from '../context/MainContext';

const Content = () => {
    const main = useContext(MainContext)
    const { currentNode } = main;

    const showPage = () => {
        switch(currentNode.toLowerCase()){
            case "about":
                return <About/>
            case "experience":
                return <Experience/>
            case "contact":
                return <Contact/>
            case "games":
                return <Games/>
            case "projects":
                return <Projects/>
            case "music":
                return <Music/>
            default:
                break;
        }
    }
    
    return (
        <>
            {showPage()}
        </>
    );
}

export default Content;
