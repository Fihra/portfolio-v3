import React, {useState} from 'react';

const GameCard = (props) => {
    const [hover, setHover] = useState(false);
    const { name, role, type, description, github, image, itchio, ost, video } = props.game;

    const onHover = () => {
        console.log("hovered");
        setHover(true);
    }

    const onHoverOver = () =>{
        console.log("leave");
        setHover(false);
    }

    return(
        <div className="game-card">
            <img src={image} width={180} height={180} onMouseEnter={onHover} onMouseLeave={onHoverOver}/>
            <div className="game-info">
                <p>{name}</p>
            </div>
        </div>
    )
}

export default GameCard;