import React from "react";

function playerCard(props) {
  const player = props.player;
  console.log(player);
  return (
    <div className="player-card">
      <span>{player.name}</span>
      <span>{player.id}</span>

      <img className="player-image" src={player.imageUrl} />
      <button>details</button>
      <button>delete</button>
    </div>
  );
}

export default playerCard;
