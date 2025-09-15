import React from "react";
import { Link } from "react-router-dom";
import { IconHome } from "@tabler/icons-react";

export function DevLog() {
  return (
    <>
      <Link to="/home" style={{ position: "absolute", top: 20, left: 20 }}>
        <IconHome />
      </Link>
      <h1>DevLog</h1>
      <p>
        Hier entsteht der DevLog. <br />
        Für mehr infos: devlog@lukasczulak.de
      </p>
    </>
  );
}
