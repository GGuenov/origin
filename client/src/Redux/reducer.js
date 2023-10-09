import {
  ADD_FAV,
  GET_FAV,
  REMOVE_FAV,
  ORDER,
  FILTER,
  RESET,
  REMOVE_COMPONENT_FAV,
} from "./actions";

let initialState = { myFavorites: [], allCharacters: [], filtered: [] };

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      console.log(action.payload);
      console.log(state.allCharacters);
      const addee = state.allCharacters.filter(
        (char) => char.id === action.payload
      );
      console.log(addee);
      state.myFavorites.push(addee);
      return {
        ...state,
        myFavorites: state.myFavorites,
        // allCharacters: action.payload,
      };

    case REMOVE_FAV:
      let id = action.payload;
      const remaining = state.myFavorites.filter(
        (fav) => fav.id !== Number(id)
      );
      // console.log(remaining);
      return { ...state, myFavorites: remaining };
    case GET_FAV:
      return { ...state, myFavorites: state.myFavorites };

    case ORDER:
      console.log(action.payload + 2);
      let ordenados;
      if (action.payload === "Toca Toca") {
        ordenados = state.myFavorites;
      } else if (action.payload === "Ascendente") {
        ordenados = state.myFavorites.sort((a, b) => (a.id > b.id ? 1 : -1));
        console.log(ordenados);
      } else {
        ordenados = state.myFavorites.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorites: ordenados,
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
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
