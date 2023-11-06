import React, { useContext } from 'react';
import data from '../data.json';
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
        <div id="content-container" className="content-container">
            {showPage()}
            {/* <fieldset><legend>About</legend>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </fieldset> */}
        </div>
    );
}

export default Content;
