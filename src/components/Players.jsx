import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useSearchParams } from "react-router-dom";
import usePlayerNames from "../hooks/usePlayerNames";
import { Sidebar } from "../components/Sidebar";

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

  return (
    <div className="container two-column">
      <Sidebar title="Players" list={names} />
      <Outlet />
    </div>
  );
};
