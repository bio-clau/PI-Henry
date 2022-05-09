import React, { Component } from "react";
import { connect } from "react-redux";
import { addPoke, getTypes } from "../../actions/actions";
import styleC from "./create.module.css";
import Uploading from "./uploading";

function mapStateToProps(state) {
  return {
    pokemonList: state.pokemonList,
    pokemonAdded: state.pokemonAdded,
    uploading: state.uploading,
    pokemonTypes: state.pokemonTypes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPoke: (pokemon) => dispatch(addPoke(pokemon)),
    getTypes: () => dispatch(getTypes()),
  };
}

export class Create extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      health: "",
      strength: "",
      defense: "",
      velocity: "",
      height: "",
      weight: "",
      types: [],
      image: "",
      selectedImage: "",
      errors: { disSend: true },
    };
  }
  componentDidMount() {
    this.props.getTypes();
  }

  validateSend(input) {
    let errors = { disSend: false };
    let aux = [
      "name",
      "health",
      "strength",
      "defense",
      "velocity",
      "height",
      "weight",
    ];
    aux.map((i) => {
      if (!input[i])
        errors = {
          ...errors,
          disSend: true,
          [i]: `Pokémon ${i} is required`,
        };
      return errors;
    });
    if (input.types.length < 1) {
      errors = {
        ...errors,
        disSend: true,
        types: `Pokémon Type is required`,
      };
    }
    return errors;
  }

  validate(input) {
    let errors = { disSend: false };
    let aux = Object.getOwnPropertyNames(input);
    aux.map((i) => {
      let aux2 = [
        "health",
        "strength",
        "defense",
        "velocity",
        "height",
        "weight",
      ];
      if (i === "name") {
        if (/\d/.test(input[i])) {
          errors = {
            ...errors,
            disSend: true,
            name: "Pokémon cannot include numbers",
          };
        } else {
          errors = { ...errors, name: "" };
        }
      }
      if (aux2.includes(i) && input[i] !== "") {
        if (!/^[0-9]+$/.test(input[i]) ) {
          errors = {
            ...errors,
            disSend: true,
            [i]: `Pokémon ${i} must be a number`,
          };
        } else  {
          errors = { ...errors, [i]: "" };
        }
      }
      return errors;
    });
    return errors;
  }

  handleInputChange(e) {
    let err = this.validate({ ...this.state, [e.target.name]: e.target.value });
    this.setState({
      ...this.state,
      errors: { ...this.state.errors, ...err },
      [e.target.name]: e.target.value,
    });
  }

  handleTypeAdd(e) {
    let arr = [...this.state.types];
    let err = { ...this.state.errors };
    if (!arr.includes(e.target.value)) {
      let aux = [...this.state.types, e.target.value];
      err.types = "";
      this.setState({
        ...this.state,
        errors: err,
        types: aux,
      });
    }
  }
  delType(e) {
    e.preventDefault()
    let arr = [...this.state.types];
    if (arr.includes(e.target.value)) {
      let pos = arr.indexOf(e.target.value);
      arr.splice(pos, 1);
      this.setState({
        ...this.state,
        types: arr,
      });
    }
  }

  handleImageChange(e) {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend = () => {
      this.setState({
        ...this.state,
        selectedImage: e.target.files[0],
        image: reader.result,
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if(this.state.errors.disSend){
      alert('Se deben corregir algunos campos')
    }else {
      let err = this.validateSend(this.state);
      if (!err.disSend) {
        this.props.addPoke(this.state);
      } else {
        alert('Se deben corregir algunos campos')
        this.setState({
          ...this.state,
          errors: err,
          [e.target.name]: e.target.value,
        });
      }
    }

    
  }

  render() {
    return (
      <div>
        {this.props.uploading ? (
          <Uploading name={"Uploading"} />
        ) : (<>
          <form className={styleC.form}>
            <div className={styleC.formContainer}>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Name: </label>
                <div>
                  <input
                    className={
                      this.state.errors.name === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="name"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.name}
                  />
                  {this.state.errors.name !== "" && (
                    <p className={styleC.err}>{this.state.errors.name}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Health: </label>
                <div>
                  <input
                    className={
                      this.state.errors.health === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="health"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.health}
                  />
                  {this.state.errors.health !== "" && (
                    <p className={styleC.err}>{this.state.errors.health}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Strength: </label>
                <div>
                  <input
                    className={
                      this.state.errors.strength === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="strength"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.strength}
                  />
                  {this.state.errors.strength !== "" && (
                    <p className={styleC.err}>{this.state.errors.strength}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Defense: </label>
                <div>
                  <input
                    className={
                      this.state.errors.defense === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="defense"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.defense}
                  />
                  {this.state.errors.defense !== "" && (
                    <p className={styleC.err}>{this.state.errors.defense}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Velocity: </label>
                <div>
                  <input
                    className={
                      this.state.errors.velocity === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="velocity"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.velocity}
                  />
                  {this.state.errors.velocity !== "" && (
                    <p className={styleC.err}>{this.state.errors.velocity}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Height: </label>
                <div>
                  <input
                    className={
                      this.state.errors.height === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="height"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.height}
                  />
                  {this.state.errors.height !== "" && (
                    <p className={styleC.err}>{this.state.errors.height}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainer}>
                <label className={styleC.label}>*Pokémon Weight: </label>
                <div>
                  <input
                    className={
                      this.state.errors.weight === ""
                        ? styleC.input
                        : styleC.danger
                    }
                    type="text"
                    name="weight"
                    onChange={(e) => this.handleInputChange(e)}
                    value={this.state.weight}
                  />
                  {this.state.errors.weight !== "" && (
                    <p className={styleC.err}>{this.state.errors.weight}</p>
                  )}
                </div>
              </div>
              <div className={styleC.inputContainerType}>
                <label className={styleC.label}>*Pokémon Types: </label>
                <div className={styleC.type}>
                  <select
                    onChange={(e) => this.handleTypeAdd(e)}
                    className={styleC.typeMenu}
                    name="type"
                  >
                    <option
                      className={styleC.opCont}
                      disabled
                      defaultValue
                      value="RESET"
                    >
                      TYPE
                    </option>
                    {this.props.pokemonTypes?.map((t) => (
                      <option
                        key={t.id}
                        className={styleC.opCont}
                        value={`${t.name}`}
                      >
                        {t.name.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  {this.state.types.map((t) => (
                    <button
                      value={t}
                      className={styleC.typeButton}
                      onClick={(e) => this.delType(e)}
                    >
                      {t} X
                    </button>
                  ))}
                </div>
              </div>
              {this.state.errors.types !== "" && (
                <p className={styleC.errTypes}>{this.state.errors.types}</p>
              )}
              <div className={styleC.inputContainer}>
                <label for='pokeImg' className={styleC.label}>Pokémon Image: </label>
                <div>
                <label for='pokeImg' className={styleC.labelImg}>Choose Image </label>
                  <input
                    className={styleC.inputImg}
                    type="file"
                    name="image"
                    id='pokeImg'
                    onChange={(e) => this.handleImageChange(e)}
                  />
                  {this.state.errors.image !== "" && (
                    <p className={styleC.err}>{this.state.errors.image}</p>
                  )}
                </div>
              </div>
              <button onClick={(e) => this.handleSubmit(e)} className={styleC.submit} type="submit">
                Submit
              </button>
            </div>
          </form>
          </>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
