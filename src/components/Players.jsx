import React, { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import usePlayersNames from "../hooks/usePlayerNames";
import usePlayerNames from "../hooks/usePlayerNames";
import { slugify } from "../utils";

function CustomLink({ to, children }) {
  const location = useLocation();
  // /players/alex-anderson => alex-anderson
  const playerId = location.pathname.split("/")[2];
  const match = playerId === to;

  const styles =
    match === true ? { fontWeight: 900, color: "var(--white)" } : {};

  return (
    <li>
      <Link
        style={{ ...styles }}
        to={{
          pathname: to,
          search: location.search,
        }}
      >
        {children}
      </Link>
    </li>
  );
}

function Sidebar({ title, list }) {
  return (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map((item) => (
          <CustomLink key={item} to={slugify(item)}>
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}

export const Players = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams(location.search);
  const [team, setTeam] = useState(searchParams.get("teamId"));

  // If team is null, we will get back all the players of all teams, otherwise just the ones of the current team
  // team state must be in sync with the url
  useEffect(() => {
    // if we don't have a query string, we delete the old one we have cashed in order to display the proper data
    // the deletion is locally, we are not actually changing the url.
    if (location.search === "") {
      searchParams.delete("teamId");
      setTeam(null);
    } else {
      // Here we change the url depending on the query value
      setTeam(searchParams.get("teamId"));
    }
  }, [location.search, searchParams]);

  const { response: names, loading } = usePlayerNames(team);

  if (loading) {
    return null;
  }

  console.log({ names });

  return (
    <div className="container">
      <Sidebar title="Players" list={names} />
    </div>
  );
};
