import React from "react";
import { Outlet, Link } from 'react-router-dom';


function playerCard(props) {
  const player = props.player;
  let id = player.id;
  return (
    <div className="player-card">
    <span className="puppy-info">
      <span className="player-name">{player.name}</span>
      <span className="player-id">{player.id}</span>
    </span>
      <img className="player-image" src={player.imageUrl} />
      <button><Link to={`${id}`}>details</Link></button>
    <Outlet />
    </div>
  );
}

export default playerCard;
