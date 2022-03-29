import React from "react";
import styleAbout from "./about.module.css";

function About() {
  return (
    <div className={styleAbout.text}>
      <p>
        Hi! My name is Claudia, I'm a biomedical engineer and a soon to be Full
        Stack Web Developer. This is a SPA for my individual project on Henry
        Bootcamp.
      </p>
      <p>
        This SPA uses the Pokèmon API, NodeJS with Express for the backend,
        PostgreSQL and Sequelize for the Database, and React with Redux for the
        frontend.
      </p>
      <p>Enjoy this Pokè-Experience!</p>
    </div>
  );
}

export default About;
