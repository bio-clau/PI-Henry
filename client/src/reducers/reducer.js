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
} from "../actions/const";

const initialState = {
  pokemonList: [],
  pokemonFiltered: [],
  pokemonDetail: {},
  pokemonAdded: {},
  pokemonTypes: [],
  uploading: false,
  loading: false,
  errors: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_POKE:
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.payload],
        pokemonAdded: action.payload,
      };
    case DEL_POKE_ADD:
      return {
        ...state,
        pokemonAdded: action.payload,
      };
    case UPLOAD_POKE:
      return {
        ...state,
        uploading: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonTypes: action.payload,
      };
    case GET_POKE:
      return {
        ...state,
        pokemonList: action.payload,
        pokemonFiltered: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case LOADING_POKE:
      return {
        ...state,
        loading: action.payload,
      };
    case FILTER_POKE:
      return {
        ...state,
        pokemonFiltered: action.payload,
      };
    case DEL_POKE_DET:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case GET_NAME:
      return {
        ...state,
        pokemonDetail: action.payload,
      };
    case ERRORS:
      return {
        ...state,
        errors: [...action.payload],
      };
    default:
      return {
        ...state,
      };
  }
}
