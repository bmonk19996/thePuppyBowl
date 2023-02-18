import React, { useEffect, useState } from "react";

export default function Search(props) {
  const allPlayers = props.allPlayers;
  const players = props.players;
  const setPlayers = props.setPlayers;
  const [searchName, setSearchName] = useState("");
  const [searchBreed, setSearchBreed] = useState("");

  function playersByName(str) {
    setSearchName(str);
    const newPlayers = [];
    const namePlayers = search(str, "name");
    const breedPlayers = search(searchBreed, "breed");
    for (let i = 0; i < namePlayers.length; i++) {
      if (breedPlayers.includes(namePlayers[i])) {
        newPlayers.push(namePlayers[i]);
      }
    }

    setPlayers(newPlayers);
  }

  function playersByBreed(str) {
    setSearchBreed(str);
    const newPlayers = [];
    const namePlayers = search(str, "breed");
    const breedPlayers = search(searchName, "name");

    for (let i = 0; i < namePlayers.length; i++) {
      if (breedPlayers.includes(namePlayers[i])) {
        newPlayers.push(namePlayers[i]);
      }
    }

    setPlayers(newPlayers);
  }
  //search by name or breed and return an array
  function search(str, type) {
    const newPlayers = [];
    if (str === "") {
      return allPlayers;
    }
    if (allPlayers) {
      for (let i = 0; i < allPlayers.length; i++) {
        if (allPlayers[i][type].includes(str)) {
          newPlayers.push(allPlayers[i]);
        }
      }
    }
    return newPlayers;
  }

  return (
    <div id="searchBar">
      <div className="name search">
        Name:
        <input
          onInput={function (event) {
            playersByName(event.target.value);
          }}
          type="text"
        ></input>
      </div>
      <div className="breed search">
        Breed:
        <input
          onInput={function (event) {
            playersByBreed(event.target.value);
          }}
          type="text"
        ></input>
      </div>
    </div>
  );
}
