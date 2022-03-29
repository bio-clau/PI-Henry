import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../img/notFound2.gif";
import styleNot from "./pokeNotFound.module.css";

function PokeNotFound({ resetAll, goback }) {
  const navigate = useNavigate();
  const goHome = function () {
    navigate("/home");
  };
  return (
    <div className={styleNot.container}>
      <div className={styleNot.gif}>
        <img src={notFound} alt="" />
      </div>
      <div className={styleNot.msg}>Pokèmon not found.</div>
      <button onClick={goback ? goHome : resetAll} className={styleNot.button}>
        Go Back
      </button>
    </div>
  );
}

export default PokeNotFound;
