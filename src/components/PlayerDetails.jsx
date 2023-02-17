import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import {getPlayer} from "../API-Adapt";
import {Navbar} from "./"
function PlayerDetails() {
    let {id} = useParams()
    const [player, setPlayer] = useState ()

    async function retrievePlayer () {
        const myPlayer = await getPlayer(id)
        setPlayer(myPlayer.data.player)  
    }
    useEffect(() => {
        retrievePlayer()  
    },[])
   
function toUpperCase(str){
    let newStr = ''
    console.log(str)
    newStr = (str.substring(0,1)).toUpperCase()
    newStr += str.substring(1)
    return newStr
}

    return (
    <div>
        <Navbar />
        <Link to={`/`} id="back-button">Go Back</Link>
        {player
        ?
        <div id="player-detail-view">
            <div id="detail-card">
                <div className="detail-text">Name: {player.name}</div>
                <div className="detail-text">Id: {player.id}</div>
                <div className="detail-text">Breed: {player.breed}</div>

                {player.team ?
                <div className="detail-text">Team: {player.team.name}</div> 
                :<div className="detail-text">Team: none</div>
                }

                <div className="detail-text">Status: {toUpperCase(player.status)}</div>
                <img id="detail-img" src={player.imageUrl}/>
            </div>
        </div>       
        :null}
        
    </div>)
}

export default PlayerDetails