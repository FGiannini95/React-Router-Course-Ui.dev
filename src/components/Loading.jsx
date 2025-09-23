import React, { useEffect, useState } from "react";

function Delayed({ children, wait = 500 }) {
  // In fastes browser, we want to display the Loading onlyu if there is an actual delay, not as default
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setShow(true);
    }, wait);

    return () => {
      window.clearInterval(timeout);
    };
  });

  return show === true ? children : null;
}

export const Loading = () => {
  return (
    <Delayed>
      <div className="loading center"></div>
    </Delayed>
  );
};
