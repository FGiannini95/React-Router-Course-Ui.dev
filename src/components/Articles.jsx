import React from "react";
import { Sidebar } from "./Sidebar";
import { Outlet, useParams } from "react-router-dom";
import useTeamsArticles from "../hooks/useTeamsArticles";
import { Loading } from "./Loading";

export const Articles = () => {
  const { teamId } = useParams();
  const { response: articles, loading } = useTeamsArticles(teamId);

  if (loading) return <Loading />;

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
