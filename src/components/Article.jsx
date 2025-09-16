import React from "react";
import { useParams, Link } from "react-router-dom";
import useArticle from "../hooks/useArticle";

export const Article = () => {
  const { teamId, articleId } = useParams();
  const { response: article, loading } = useArticle({ teamId, articleId });

  if (loading) return;

  return (
    <div className="panel">
      <article className="article">
        <h1 className="header">{article.title}</h1>
        <p>{article.body}</p>
      </article>
    </div>
  );
};
