import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../actions/actions";
import { useNavigate } from "react-router-dom";
import searchIcon from '../img/buscar.png'

import styleS from "./searchBar.module.css";

function SearchBar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = function (e) {
    setSearch(e.target.value);
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    dispatch(getName(search.toLowerCase()));
    setSearch("");
    navigate("/detail");
  };

  return (
    <form className={styleS.form} >
      <input
        type="text"
        placeholder="Search by Name"
        value={search}
        className={styleS.input}
        onChange={(e) => handleChange(e)}
      />

      <button onClick={(e) => handleSubmit(e)} className={styleS.button} type="submit">
        SEARCH
      </button>
      <button onClick={(e) => handleSubmit(e)} className={styleS.buttonMobile} type="submit">
        <img src={searchIcon} className={styleS.searchIcon} alt="search" />
      </button>
    </form>
  );
}
export default SearchBar;
