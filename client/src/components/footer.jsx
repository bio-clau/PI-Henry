import React from "react";
import styleF from "./footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Link to="/about">
      <div className={styleF.about}>
        <h5>About</h5>
      </div>
    </Link>
  );
}

export default Footer;
