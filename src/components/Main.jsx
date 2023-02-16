import React, {useState, useEffect} from "react";
import { Navbar, PlayerList, PlayerCard} from "./";
import getPlayers from "../API-Adapt";


const Main = () => {
    const [players, setPlayers] = useState ({})
    async function retrievePlayers () {
        const myPlayers = await getPlayers()
        setPlayers (myPlayers)    

    }
    useEffect(() => {
        retrievePlayers()  

    },[])

console.log(players)
    return(
        <div id="main">
            <Navbar />
            <PlayerList/>
        </div>
    )
}

export default Main