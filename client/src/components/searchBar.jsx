import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../actions/actions";
import { useNavigate } from "react-router-dom";

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
    dispatch(getName(search));
    setSearch("");
    navigate("/detail");
  };

  return (
    <form className={styleS.form} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search by Name"
        value={search}
        className={styleS.input}
        onChange={(e) => handleChange(e)}
      />

      <button className={styleS.button} type="submit">
        SEARCH
      </button>
    </form>
  );
}
export default SearchBar;