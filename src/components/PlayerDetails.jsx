import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import {getPlayer} from "../API-Adapt";
import {Navbar} from "./"
function PlayerDetails() {
    let {id} = useParams()
    const [player, setPlayer] = useState ({})

    async function retrievePlayer () {
        const myPlayer = await getPlayer(id)
        setPlayer(myPlayer.data.player)  
    }
    useEffect(() => {
        retrievePlayer()  
    },[])
   
    return <div>
        <Navbar />
        <Link to={`/`} id="back-button">Go Back</Link>
        <div id="player-detail-view">
        <div id="detail-card">
        <div>Name: {player.name}</div>
        <div>Id: {player.id}</div>
        <div>Breed: {player.breed}</div>
        <div>Status: {player.status}</div>
        <img id="detail-img" src={player.imageUrl}/>
        </div>
    </div>
    </div>
}

export default PlayerDetails