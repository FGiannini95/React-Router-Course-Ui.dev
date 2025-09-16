import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";

export const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading) return;

  return (
    <div className="container two-column">
      <Sidebar
        title="Articles"
        list={articles.map((articles) => articles.title)}
      />
      <Outlet />
    </div>
  );
};
