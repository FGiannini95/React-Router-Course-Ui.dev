import React from "react";
import TeamLogo from "./TeamLogo";
import { Link } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import { Loading } from "./Loading";

export const Home = () => {
  const { loading, response: teamNames } = useTeamNames();

  return (
    <div className="container">
      <h1 className="large-header">Hash History Basketball Leauge</h1>
      <h3 className="header text-center">Select a team</h3>
      <div className="home-grid">
        {loading ? (
          <Loading />
        ) : (
          teamNames.map((id) => (
            <Link key={id} to={`/${id}`}>
              <TeamLogo id={id} width="125px" />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};
