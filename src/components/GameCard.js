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
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    mobileView :{
        zIndex: '3',
        width: 100,
        height: 200,
        textAlign: 'center',
        overflow: 'hidden',
        margin: '0 auto',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
}

const currentWindowSize = {
    width: '',
    height: ''
}

const GameCard = (props) => {
    const [windowSize, setWindowSize] = useState(currentWindowSize);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [hover, setHover] = useState(false);
    const { name, role, type, description, github, image, itchio, ost, video } = props.game;

    const handleResize = () => {
        setWindowSize({
            ...currentWindowSize,
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        handleResize();
    }, [])

    window.addEventListener("resize", handleResize);

    console.log(windowSize);

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
                style={windowSize.width < 500 ? customStyle.mobileView : customStyle.content}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="mobile-modal"
            >
                <h2>{name}</h2>
                <img src={image} width={470} height={250}/>
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
            {/* {hover && <div className="game-info"><p>{name}</p></div>} */}
            <div className="game-info">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default GameCard;