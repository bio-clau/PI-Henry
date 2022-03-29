import React from "react";
import styleI from "./init.module.css";
import pokeInit from "../img/pokemon.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delPokeAdd } from "../actions/actions";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goRandom = function () {
    dispatch(delPokeAdd());
    navigate("/randompoke");
  };

  return (
    <div className={styleI.container}>
      <button onClick={goRandom} className={styleI.button}>
        Discover your Pokémon of the day
      </button>
      <img src={pokeInit} alt="Poke Inicial" />
    </div>
  );
}
