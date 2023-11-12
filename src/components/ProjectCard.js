import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineGames } from 'react-icons/md';
import { CgWebsite } from 'react-icons/cg';

const customStyle = {
    content: {
        zIndex: '3',
        width: 500,
        height: 600,
        textAlign: 'center',
        overflow: 'hidden',
        margin: '0 auto',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: '10%'
    }
}

const ProjectCard = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const { name, image, type, description, itchio, github, link } = props.project;

    const onHover = () => {
        setHover(true);
    }

    const onHoverOver = () =>{
        setHover(false);
    }

    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => {
        setModalIsOpen(false);
    }

    const iconSize = '24px';

    return(
        <div className="project-card">
            <Modal
                style={customStyle}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="main-modal"
            >
                <h2>{name}</h2>
                <img src={image} width={400} height={250}/>
                <h4>Type: {type}</h4>
                <p>{description}</p>
                <div className="icons-container">
                    <ul>
                        {(github !== "") && <li><a href={github}><FaGithub size={iconSize} color={"white"}/></a></li>}
                        {(itchio !== "") && <li><a href={itchio}><MdOutlineGames size={iconSize} color={"white"}/></a></li> }
                        {(link !== "") && <li><a href={link}><CgWebsite size={iconSize} color={"white"}/></a></li>}                    
                    </ul>
                </div>
            </Modal>
            <img src={image} width={180} height={180} onClick={openModal} onMouseEnter={onHover} onMouseLeave={onHoverOver}/>
            <div className="project-info">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default ProjectCard;