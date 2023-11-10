import React from 'react';

const GameCard = (props) => {
    console.log(props);
    const { name, role, type, description, github, image, itchio, ost, video } = props.game;

    console.log(image);

    return(
        <div className="game-card">
            <img src={image} width={180} height={180}/>
        </div>
    )
}

export default GameCard;