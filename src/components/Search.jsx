import React, { useEffect, useState } from "react";

export default function Search(props) {
  const players = props.players;
  const setPlayers = props.setPlayers;
  const [searchName, setSearchName] = useState("");
  const [searchBreed, setSearchBreed] = useState("");
  // function playersByName(str){
  //   const newPlayers = []
  //   if(players){
  //     for(let i = 0; i < players.length; i++){
  //       console.log(players[i], str)
  //       if(players[i].name.includes(str)){
  //         newPlayers.push(players[i])
  //       }
  //     }
  //     console.log(newPlayers)
  //     setPlayers(newPlayers);
  //   }
  // }
  // function playersByBreed(str){
  //   const newPlayers = []
  //   if(players){
  //     for(let i = 0; i < players.length; i++){
  //       console.log(players[i], str)
  //       if(players[i].breed.includes(str)){
  //         newPlayers.push(players[i])
  //       }
  //     }
  //     console.log(newPlayers)
  //     setPlayers(newPlayers);
  //   }
  // }

  return (
    <div id="searchBar">
      <div className="name search">
        Name:
        <input
          onInput={function (event) {
            console.log(event.target.value);
          }}
          type="text"
        ></input>
      </div>
      <div className="breed search">
        Breed:
        <input
          onInput={function (event) {
            console.log(event.target.value);
          }}
          type="text"
        ></input>
      </div>
    </div>
  );
}
