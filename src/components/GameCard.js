import React, {useState, useEffect} from 'react';
import Modal from 'react-modal';
import { FaGithub } from 'react-icons/fa';
import { MdOutlineGames } from 'react-icons/md';
import { FaMusic } from 'react-icons/fa';

const customStyle = {
    content: {
        zIndex: '3',
        width: 500,
        height: 600,
        textAlign: 'center',
        overflow: 'hidden',
        margin: '0 auto',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        marginTop: "10%"
    }
}

const GameCard = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const { name, role, description, github, image, itchio, ost } = props.game;

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
        <div className="game-card">
            <Modal
                style={customStyle.content}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="main-modal"
            >
                <h2>{name}</h2>
                <img src={image} width={400} height={250}/>
                <h4>Role: {role}</h4>
                <p>{description}</p>
                <div className="icons-container">
                    <ul>
                        {(github !== "") && <li><a href={github}><FaGithub size={iconSize} color={"white"}/></a></li>}
                        {(itchio !== "") && <li><a href={itchio}><MdOutlineGames size={iconSize} color={"white"}/></a></li> }
                        {(ost !== "") && <li><a href={ost}><FaMusic size={iconSize} color={"white"}/></a></li>}                    
                    </ul>
                </div>
            </Modal>
            <img src={image} width={180} height={180} onClick={openModal} onMouseEnter={onHover} onMouseLeave={onHoverOver}/>
            <div className="game-info">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default GameCard;