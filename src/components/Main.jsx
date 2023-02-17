import React, {useState, useEffect} from "react";
import { Navbar, PlayerList, Search} from "./";
import getPlayers from "../API-Adapt";


const Main = () => {
    const [players, setPlayers] = useState ([])

    async function retrievePlayers () {
        const myPlayers = await getPlayers()
        setPlayers (myPlayers.data.players)    
    }
    useEffect(() => {
        retrievePlayers()  
    },[])

    return(
        <div id="main">
            <Navbar />
            <Search players={players} setPlayers={setPlayers}/>
            <PlayerList players={players}/>
        </div>
    )
}

export default Main