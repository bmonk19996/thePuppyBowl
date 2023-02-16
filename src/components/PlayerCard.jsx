import React from "react";

function playerCard(props) {
  const player = props.player;
  return (
    <div className="player-card">
    <span className="puppy-info">
      <span className="player-name">{player.name}</span>
      <span className="player-id">{player.id}</span>
    </span>
      <img className="player-image" src={player.imageUrl} />
      <button>details</button>
      <button>delete</button>
    </div>
  );
}

export default playerCard;
