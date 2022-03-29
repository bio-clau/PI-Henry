import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { pokeDetail } from "../../actions/actions";
import styleCard from "./pokeCard.module.css";

function PokeCard({ poke }) {
  const dispatch = useDispatch();

  const handleDetail = function (id) {
    dispatch(pokeDetail(id));
  };
  return (
    <div key={poke.id} className={styleCard.pokeCard}>
      <h2 className={styleCard.title}>{poke.name}</h2>
      <div className={styleCard.dataContainer}>
        <div>
          <p className={styleCard.subtitle}>Types:</p>
          {poke.types?.map((t) =>
            t.name ? <p key={`type${t.id}`}>{t.name}</p> : <p key={t}>{t}</p>
          )}
          <p className={styleCard.subtitle}>Stregth:</p>
          <p>{poke.strength}</p>
        </div>
        <div>
          {poke.miniImg ? (
            <img src={poke.miniImg} alt="miniPoke" />
          ) : (
            <img className={styleCard.urlMini} src={poke.img} alt="miniPoke" />
          )}
        </div>
      </div>
      <Link className={styleCard.link} to="/detail">
        <button
          className={styleCard.button}
          onClick={() => handleDetail(poke.id)}
        >
          Detail
        </button>
      </Link>
    </div>
  );
}

export default PokeCard;
