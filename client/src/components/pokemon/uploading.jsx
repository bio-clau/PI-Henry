import React from "react";
import loading from "../../img/loading.gif";
import styleL from "./uploading.module.css";

export default function Uploading({ name }) {
  return (
    <div>
      <img src={loading} alt="loading poke" />
      <div className={styleL.uploading}>{name}...</div>
    </div>
  );
}
