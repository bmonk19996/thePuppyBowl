import React, {useState, useEffect} from "react";
import { Navbar, PlayerList, PlayerCard} from "./";
import getPlayers from "../API-Adapt";


const Main = () => {
    const [players, setPlayers] = useState (null)
    async function retrievePlayers () {
        const myPlayers = await getPlayers()
        setPlayers (myPlayers.data.players)    
        console.log(myPlayers)
    }
    useEffect(() => {
        retrievePlayers()  

    },[])

    return(
        <div id="main">
            <Navbar />
            <PlayerList players={players}/>
        </div>
    )
}

export default Main