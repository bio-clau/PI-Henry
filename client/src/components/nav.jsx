import React, {useState} from "react";
import { Link } from "react-router-dom";
import styleNav from "./nav.module.css";
import pokeLogo from "../pokemon_logo_PNG5.png";
import SearchBar from "./searchBar";
import menuIcon from '../img/lista.png'

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false)
  function myFunction(){
    setShowMenu(prevState => !prevState)
  }
  return (
    <div className={styleNav.container}>
      <div className={styleNav.inputs}>
        <div className={styleNav.dropdown}>
          <button onClick={myFunction} className={styleNav.dropbtn}><img className={styleNav.menuIcon} src={menuIcon} alt="menu" /></button>
          {showMenu && <div id="myDropdown" className={styleNav.dropdownContent}>
            <a href="/" className={styleNav.menuItem}>Home</a>
            <a href="/home" className={styleNav.menuItem}>Pokédex</a>
            <a href="create" className={styleNav.menuItem}>Create</a>
          </div>}
        </div>
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
