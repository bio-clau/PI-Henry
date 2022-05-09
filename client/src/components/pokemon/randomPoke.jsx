import React, { useState, useEffect, useRef } from "react";
import stylePoke from "./randomPoke.module.css";
import Uploading from "./uploading";

export default function RandomPoke() {
  const [randomPoke, setRandomPoke] = useState({});
  const mountedRef = useRef(true);

  useEffect(() => {
    let numPoke = Math.floor(Math.random() * 39 + 1);
    fetch(`https://henry-pi-backend.herokuapp.com/pokemons/${numPoke}`)
      .then((res) => res.json())
      .then((data) => {
        const poke = {
          name: data.name,
          img: data.img,
          height: data.height,
          weight: data.weight,
          health: data.health,
          strength: data.strength,
          defense: data.defense,
          velocity: data.velocity,
        };
        setRandomPoke(poke);
      });
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return (
    <>
      {!randomPoke.name ? (
        <Uploading name="Loading" />
      ) : (
        <>
          <div className={stylePoke.container}>
            <div className={stylePoke.titleContainer}>
              <h2 className={stylePoke.name}>
                {randomPoke.name.toUpperCase()}
              </h2>
            </div>
            <div className={stylePoke.dataContainer}>
              <div className={stylePoke.infoContainer}>
                <h4 className={stylePoke.abName}>Health: </h4>
                <p className={stylePoke.abName}>{randomPoke.health}</p>
              </div>
              <div className={stylePoke.infoContainer}>
                <h4 className={stylePoke.abName}>Height: </h4>
                <p className={stylePoke.abName}>{randomPoke.height}</p>
              </div>
              <div className={stylePoke.infoContainer}>
                <h4 className={stylePoke.abName}>Weight: </h4>
                <p className={stylePoke.abName}>{randomPoke.weight}</p>
              </div>
              <div className={stylePoke.infoContainer}>
                <h4 className={stylePoke.abName}>Strength: </h4>
                <p className={stylePoke.abName}>{randomPoke.strength}</p>
              </div>
              <div className={stylePoke.infoContainer}>
                <h4 className={stylePoke.abName}>Defense: </h4>
                <p className={stylePoke.abName}>{randomPoke.defense}</p>
              </div>
              <div className={stylePoke.infoContainer}>
                <h4 className={stylePoke.abName}>Velocity: </h4>
                <p className={stylePoke.abName}>{randomPoke.velocity}</p>
              </div>
            </div>
            <div className={stylePoke.imgContainer}>
              <img src={randomPoke.img} alt="pokemon" />
            </div>
          </div>
          <div className={stylePoke.containerMob}>
            <div className={stylePoke.dataMob}>
              <div className={stylePoke.titleContainerMob}>
                <h2 className={stylePoke.nameMob}>
                  {randomPoke.name.toUpperCase()}
                </h2>
              </div>
              <div className={stylePoke.dataContainerMob}>
                <div className={stylePoke.infoContainerMob}>
                  <h4 className={stylePoke.abNameMob}>Health: </h4>
                  <p className={stylePoke.abNameMob}>{randomPoke.health}</p>
                </div>
                <div className={stylePoke.infoContainerMob}>
                  <h4 className={stylePoke.abNameMob}>Height: </h4>
                  <p className={stylePoke.abNameMob}>{randomPoke.height}</p>
                </div>
                <div className={stylePoke.infoContainerMob}>
                  <h4 className={stylePoke.abNameMob}>Weight: </h4>
                  <p className={stylePoke.abNameMob}>{randomPoke.weight}</p>
                </div>
                <div className={stylePoke.infoContainerMob}>
                  <h4 className={stylePoke.abNameMob}>Strength: </h4>
                  <p className={stylePoke.abNameMob}>{randomPoke.strength}</p>
                </div>
                <div className={stylePoke.infoContainerMob}>
                  <h4 className={stylePoke.abNameMob}>Defense: </h4>
                  <p className={stylePoke.abNameMob}>{randomPoke.defense}</p>
                </div>
                <div className={stylePoke.infoContainerMob}>
                  <h4 className={stylePoke.abNameMob}>Velocity: </h4>
                  <p className={stylePoke.abNameMob}>{randomPoke.velocity}</p>
                </div>
              </div>
            </div>
            <div className={stylePoke.imgContainerMob}>
              <img className={stylePoke.imgMob} src={randomPoke.img} alt="pokemon" />
            </div>
          </div>
        </>
      )}
    </>
  );
}
