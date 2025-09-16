import React from "react";
import { useParams, Link } from "react-router-dom";
import usePlayer from "../hooks/usePlayer";
import { Loading } from "./Loading";

export const Player = () => {
  const { playerId } = useParams();

  const { response: player, loading } = usePlayer(playerId);

  if (loading) {
    return <Loading />;
  }
  if (!player) return;

  return (
    <div className="panel">
      <img
        src={player.avatar}
        alt={`Avatar for ${player.name}`}
        className="avatar"
      />
      <h1 className="medium-header">{player.name}</h1>
      <h3 className="header">#{player.number}</h3>
      <div className="row">
        <ul className="info-list" style={{ marginRight: 80 }}>
          <li>
            Team
            <div>
              {/* Team's name but with first letter capitalized */}
              <Link to={`/${player.teamId}`}>
                {player.teamId[0].toUpperCase() + player.teamId.slice(1)}
              </Link>
            </div>
          </li>
          <li>
            Position<div>{player.position}</div>
          </li>
          <li>
            Points PG<div>{player.ppg}</div>
          </li>
        </ul>
        <ul className="info-list">
          <li>
            Assists PG<div>{player.apg}</div>
          </li>
          <li>
            Steals RG<div>{player.srg}</div>
          </li>
          <li>
            Rebounce PG<div>{player.rpg}</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
