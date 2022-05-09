import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import stylePoke from "./randomPoke.module.css";
import { delPokeAdd, delPokeDet } from "../../actions/actions";
import Uploading from "./uploading";
import PokeNotFound from "../home/pokeNotFound";

function mapDispatchToProps(dispatch) {
  return {
    delPokeAdd: () => dispatch(delPokeAdd()),
    delPokeDet: () => dispatch(delPokeDet()),
  };
}

function mapStateToProps(state) {
  return {
    pokeAdd: state.pokemonAdded,
    pokeDet: state.pokemonDetail,
    loading: state.loading,
  };
}

export class PokeDetail extends Component {
  handleCreate() {
    this.props.delPokeAdd();
  }
  componentWillUnmount() {
    this.props.delPokeDet();
    this.props.delPokeAdd();
  }

  render() {
    return (
      <>
        {this.props.loading ? (
          <Uploading name={"Loading"} />
        ) : this.props.pokeDet === "Request failed with status code 404" ? (
          <PokeNotFound goback="true" />
        ) : (
          <>
            <div className={stylePoke.container}>
              <div className={stylePoke.titleContainer}>
                <h2 className={stylePoke.name}>
                  {this.props.from === "added"
                    ? this.props.pokeAdd.name
                    : this.props.pokeDet.name}
                </h2>
              </div>
              <div className={stylePoke.dataContainer}>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Health: </h4>
                  <p className={stylePoke.abName}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.health
                      : this.props.pokeDet.health}
                  </p>
                </div>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Height: </h4>
                  <p className={stylePoke.abName}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.height
                      : this.props.pokeDet.height}
                  </p>
                </div>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Weight: </h4>
                  <p className={stylePoke.abName}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.weight
                      : this.props.pokeDet.weight}
                  </p>
                </div>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Strength: </h4>
                  <p className={stylePoke.abName}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.strength
                      : this.props.pokeDet.strength}
                  </p>
                </div>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Defense: </h4>
                  <p className={stylePoke.abName}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.defense
                      : this.props.pokeDet.defense}
                  </p>
                </div>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Velocity: </h4>
                  <p className={stylePoke.abName}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.velocity
                      : this.props.pokeDet.velocity}
                  </p>
                </div>
                <div className={stylePoke.infoContainer}>
                  <h4 className={stylePoke.abName}>Types: </h4>
                  {this.props.from === "added"
                    ? this.props.pokeAdd.types?.map((t) => (
                        <p key={t} className={stylePoke.abName}>
                          {" "}
                          {t}{" "}
                        </p>
                      ))
                    : this.props.pokeDet.types?.map((t) => (
                        <p key={t} className={stylePoke.abName}>
                          {" "}
                          {t}{" "}
                        </p>
                      ))}
                </div>
                <div>
                  {this.props.from === "added" ? (
                    <button
                      className={stylePoke.button}
                      onClick={() => this.handleCreate(this.props.from)}
                    >
                      Create More
                    </button>
                  ) : (
                    <Link to="/home">
                      <button className={stylePoke.button}>Home</button>
                    </Link>
                  )}
                </div>
              </div>
              <div className={stylePoke.imgContainer}>
                <img
                  className={stylePoke.image}
                  src={
                    this.props.from === "added"
                      ? this.props.pokeAdd.img
                      : this.props.pokeDet.img
                  }
                  alt="pokemon"
                />
              </div>
            </div>

            <div className={stylePoke.containerMob}>
              <div className={stylePoke.dataMob}>
                <div className={stylePoke.titleContainerMob}>
                  <h2 className={stylePoke.nameMob}>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.name
                      : this.props.pokeDet.name}
                  </h2>
                </div>
                <div className={stylePoke.dataContainerMob}>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Health: </h4>
                    <p className={stylePoke.abNameMob}>
                      {this.props.from === "added"
                        ? this.props.pokeAdd.health
                        : this.props.pokeDet.health}
                    </p>
                  </div>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Height: </h4>
                    <p className={stylePoke.abNameMob}>
                      {this.props.from === "added"
                        ? this.props.pokeAdd.height
                        : this.props.pokeDet.height}
                    </p>
                  </div>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Weight: </h4>
                    <p className={stylePoke.abNameMob}>
                      {this.props.from === "added"
                        ? this.props.pokeAdd.weight
                        : this.props.pokeDet.weight}
                    </p>
                  </div>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Strength: </h4>
                    <p className={stylePoke.abNameMob}>
                      {this.props.from === "added"
                        ? this.props.pokeAdd.strength
                        : this.props.pokeDet.strength}
                    </p>
                  </div>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Defense: </h4>
                    <p className={stylePoke.abNameMob}>
                      {this.props.from === "added"
                        ? this.props.pokeAdd.defense
                        : this.props.pokeDet.defense}
                    </p>
                  </div>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Velocity: </h4>
                    <p className={stylePoke.abNameMob}>
                      {this.props.from === "added"
                        ? this.props.pokeAdd.velocity
                        : this.props.pokeDet.velocity}
                    </p>
                  </div>
                  <div className={stylePoke.infoContainerMob}>
                    <h4 className={stylePoke.abNameMob}>Types: </h4>
                    {this.props.from === "added"
                      ? this.props.pokeAdd.types?.map((t) => (
                          <p key={t} className={stylePoke.abNameMob}>
                            {" "}
                            {t}{" "}
                          </p>
                        ))
                      : this.props.pokeDet.types?.map((t) => (
                          <p key={t} className={stylePoke.abNameMob}>
                            {" "}
                            {t}{" "}
                          </p>
                        ))}
                  </div>
                </div>

              </div>
              <div className={stylePoke.imgContainerMob}>
                <img
                  className={stylePoke.imgMob}
                  src={
                    this.props.from === "added"
                      ? this.props.pokeAdd.img
                      : this.props.pokeDet.img
                  }
                  alt="pokemon"
                />
              </div>
              <div>
                  {this.props.from === "added" ? (
                    <button
                      className={stylePoke.buttonMob}
                      onClick={() => this.handleCreate(this.props.from)}
                    >
                      Create More
                    </button>
                  ) : (
                    <Link to="/home">
                      <button className={stylePoke.buttonMob}>Home</button>
                    </Link>
                  )}
                </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokeDetail);
