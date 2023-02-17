import React, {useState, useEffect} from "react";
import {useParams, Link} from 'react-router-dom';
import {getPlayer} from "../API-Adapt";
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
    return <div id="player-detail-view">
        <Link to={`/`}>go back</Link>
        <div>Breed: {player.breed}</div>
        <div>Id: {player.id}</div>
        <div>name: {player.name}</div>
        <div>status: {player.status}</div>
        <img src={player.imageUrl}/>
    </div>
}

export default PlayerDetails