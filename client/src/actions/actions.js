import {
  ADD_POKE,
  DEL_POKE_ADD,
  UPLOAD_POKE,
  GET_TYPES,
  GET_POKE,
  GET_DETAIL,
  LOADING_POKE,
  FILTER_POKE,
  DEL_POKE_DET,
  GET_NAME,
  ERRORS,
} from "./const";

// export function uploadPoke (pokemon) {
//     return function (dispatch) {

//     }
// }

export function addPoke(pokemon) {
  return function (dispatch) {
    dispatch({ type: UPLOAD_POKE, payload: true });
    return fetch("https://henry-pi-backend.herokuapp.com/pokemons", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    })
      .then((response) => response.json())
      .then((rta) => {
        dispatch({ type: UPLOAD_POKE, payload: false });
        dispatch({ type: ADD_POKE, payload: rta });
      })
      .catch((err) => dispatch({ type: ERRORS, payload: [err] }));
  };
}

export function delPokeAdd() {
  return { type: DEL_POKE_ADD, payload: {} };
}

export function getTypes() {
  return function (dispatch) {
    return fetch("https://henry-pi-backend.herokuapp.com/type")
      .then((res) => res.json())
      .then((rta) => {
        dispatch({ type: GET_TYPES, payload: rta });
      })
      .catch((err) => dispatch({ type: ERRORS, payload: [err] }));
  };
}

export function getPoke() {
  return function (dispatch) {
    dispatch({ type: LOADING_POKE, payload: true });
    return fetch("https://henry-pi-backend.herokuapp.com/pokemons")
      .then((res) => res.json())
      .then((rta) => {
        dispatch({ type: LOADING_POKE, payload: false });
        dispatch({ type: GET_POKE, payload: rta });
      })
      .catch((err) => dispatch({ type: ERRORS, payload: [err] }));
  };
}

export function pokeDetail(id) {
  return function (dispatch) {
    return fetch(`https://henry-pi-backend.herokuapp.com/pokemons/${id}`)
      .then((res) => res.json())
      .then((rta) => {
        dispatch({ type: GET_DETAIL, payload: rta });
      })
      .catch((err) => dispatch({ type: ERRORS, payload: [err] }));
  };
}

export function filterPoke(list) {
  return { type: FILTER_POKE, payload: list };
}

export function delPokeDet() {
  return { type: DEL_POKE_DET, payload: {} };
}

export function getName(name) {
  return function (dispatch) {
    dispatch({ type: LOADING_POKE, payload: true });
    return fetch(`https://henry-pi-backend.herokuapp.com/pokemons/?name=${name}`)
      .then((res) => res.json())
      .then((rta) => {
        dispatch({ type: LOADING_POKE, payload: false });
        console.log(rta)
        dispatch({ type: GET_NAME, payload: rta });
      })
      .catch((err) => dispatch({ type: ERRORS, payload: [err] }));
  };
}
