import React, { useContext } from 'react';
import About from './About';
import Resume from './Resume';
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
            case "resume":
                return <Resume/>
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
