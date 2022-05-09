import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../../img/notFound2.gif";
import styleNot from "./pokeNotFound.module.css";

function PokeNotFound({ resetAll, goback, goinit }) {
  const navigate = useNavigate();
  const goHome = function () {
    navigate("/home");
  };
  const goInit = function(){
    navigate('/')
  }
  return (
    <div className={styleNot.container}>
      <div className={styleNot.gif}>
        <img src={notFound} className={styleNot.gifMob} alt="" />
      </div>
      <div className={styleNot.msg}>Pokèmon not found.</div>
      <button onClick={goinit? goInit : goback ? goHome : resetAll} className={styleNot.button}>
        Go Back
      </button>
    </div>
  );
}

export default PokeNotFound;
