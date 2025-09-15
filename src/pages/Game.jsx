import React from "react";
import { Link } from "react-router-dom";
import { IconHome } from "@tabler/icons-react";

export function Game() {
  return (
    <>
      <Link to="/home" style={{ position: "absolute", top: 20, left: 20 }}>
        <IconHome />
      </Link>
      <h1>Game</h1>
      <p>
        Hier entsteht ein ganz tolles Game. <br />
        Für mehr infos: game@lukasczulak.de
      </p>
    </>
  );
}
