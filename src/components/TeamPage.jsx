import React from "react";
import { useParams } from "react-router-dom";

export const TeamPage = () => {
  const { teamId } = useParams();

  return <div>TeamPag for {teamId.toLowerCase()}</div>;
};
