import React, {useEffect} from 'react';
import GameCard from './GameCard';
import data from "../data.json";

const Games = () => {
    useEffect(() => {
        let contentContainer = document.getElementById("content-container");
        contentContainer.classList.add("show-content-border");
    }, [])

    const showGames = () => {
        return data.games.map((game, i) => {
           return <GameCard key={i} game={game}/>
        })
    }

    return (
        <div id="content-container" className="games-container">
            <fieldset>
                <legend>Games</legend>
                <div className="all-games">
                {showGames()}
                </div>
            </fieldset>
        </div>
    );
}

export default Games;
