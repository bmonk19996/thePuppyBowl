import React from "react";
import {PlayerCard} from "./"

function PlayerList(props){
    //const players = props.players
    const players = ['test','test2','test3']
    return( 
    <div>
        {players.map((player,idx) =>{
            return <PlayerCard count={idx} key={`PlayerList:${idx}`}/>
        })}
        

    </div>)
}

export default PlayerList


     
    