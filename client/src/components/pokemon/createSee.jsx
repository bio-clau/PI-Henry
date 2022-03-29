import React, { Component } from "react";
import { connect } from "react-redux";
import Create from "./create";
import PokeDetail from "./pokeDetail";
// import Loading from '../extras/loading'
function mapStateToProps(state) {
  return {
    pokemonAdded: state.pokemonAdded,
  };
}
//   this.props.pokemonAdded.hasOwnProperty('name')
export class CreateSee extends Component {
  render() {
    return (
      <div>
        {this.props.pokemonAdded.hasOwnProperty("name") ? (
          <PokeDetail from={"added"} />
        ) : (
          <Create />
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CreateSee);
