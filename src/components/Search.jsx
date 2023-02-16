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
      <form
        onSubmit={function () {
          console.log("need function");
        }}
        className="name search"
      >
        Name:<input type="text"></input>
        <input type="submit" value="Submit"></input>
      </form>
      <form
        onSubmit={function () {
          console.log("need function");
        }}
        className="breed search"
      >
        Breed:<input type="text"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
