import {
  ADD_FAV,
  GET_FAV,
  REMOVE_FAV,
  ORDER,
  FILTER,
  RESET,
  REMOVE_COMPONENT_FAV,
} from "./actions";

let initialState = { myFavorites: [], allCharacters: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    case REMOVE_FAV:
      return { ...state, myFavorites: action.payload };
    case GET_FAV:
      return { ...state, myFavorites: action.payload };

    case ORDER:
      let ordenados;
      if (action.payload === "Toca Toca") {
        ordenados = state.myFavorites;
      } else if (action.payload === "Ascendente") {
        ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }

      return {
        ...state,
        myFavorites: [...ordenados],
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    case RESET:
      return {
        ...state,
        myFavorites: state.myFavorites,
      };
    case REMOVE_COMPONENT_FAV:
      const removeFav = state.myFavorites.filter(
        (char) => char.id !== Number(action.payload)
      );

      return {
        ...state,
        myFavorites: removeFav,
      };

    default:
      return {
        ...state,
      };
  }
}
