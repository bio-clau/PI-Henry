import React from "react";
import { Link } from "react-router-dom";
import styleNav from "./nav.module.css";
import pokeLogo from "../pokemon_logo_PNG5.png";
import SearchBar from "./searchBar";

export default function Nav() {
  return (
    <div className={styleNav.container}>
      <div className={styleNav.inputs}>
        <Link to="/">
          <img className={styleNav.logo} src={pokeLogo} alt="pokeLogo" />
        </Link>
        <Link to="/home">
          <h3 className={styleNav.menu}>Pokédex</h3>
        </Link>
        <Link to="/create">
          <h3 className={styleNav.menu}>Create</h3>
        </Link>
      </div>
      <div className={styleNav.inputs}>
        <SearchBar />
      </div>
    </div>
  );
}
