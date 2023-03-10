import React from "react";
import {PlayerCard} from "./"

function PlayerList(props){
    const players = props.players
    return( 
    <div id="player-list">
        {players.length ? players.map((player,idx) =>{
            return <PlayerCard player={player} key={`PlayerList:${idx}`}/>
        }):null}
        

    </div>)
}

export default PlayerList


     
    