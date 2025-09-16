import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import useTeamNames from "../hooks/useTeamNames";
import { Loading } from "./Loading";

export const Teams = () => {
  const { response: teamsNames, loading } = useTeamNames();

  if (loading) return <Loading />;

  return (
    <div className="container two-column">
      <Sidebar tittle="Teams" list={teamsNames} />
      <Outlet />
    </div>
  );
};
