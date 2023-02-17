import React, { useEffect, useState } from "react";

export default function Search(props) {
  const allPlayers = props.allPlayers
  const players = props.players;
  const setPlayers = props.setPlayers;
  const [searchName, setSearchName] = useState("");
  const [searchBreed, setSearchBreed] = useState("");


  function playersByName(str){
    const newPlayers = []
    if(str === ''){
      setPlayers(allPlayers)
      return
    }
    if(allPlayers){
      for(let i = 0; i < allPlayers.length; i++){
        if(allPlayers[i].name.includes(str)){
          newPlayers.push(allPlayers[i])
        }
      }
      setPlayers(newPlayers);
    }
  }


  function playersByBreed(str){
    const newPlayers = []
    if(str === ''){
      setPlayers(allPlayers)
      return
    }
    if(allPlayers){
      for(let i = 0; i < allPlayers.length; i++){
        if(allPlayers[i].breed.includes(str)){
          newPlayers.push(allPlayers[i])
        }
      }
      setPlayers(newPlayers);
    }
  }

  return (
    <div id="searchBar">
      <div className="name search">
        Name:
        <input
          onInput={function (event) {
            playersByName(event.target.value)
          }}
          type="text"
        ></input>
      </div>
      <div className="breed search">
        Breed:
        <input
          onInput={function (event) {
            playersByBreed(event.target.value)
          }}
          type="text"
        ></input>
      </div>
    </div>
  );
}
