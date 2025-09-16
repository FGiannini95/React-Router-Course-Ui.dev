import React from "react";
import { Link, useLocation } from "react-router-dom";
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

export const Sidebar = ({ title, list }) => {
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
};
