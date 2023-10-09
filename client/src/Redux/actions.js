import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const GET_FAV = "GET_FAV";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
export const RESET = "RESET";
export const REMOVE_COMPONENT_FAV = "REMOVE_COMPONENT_FAV";
export const GET_ALL_CHAR = "GET_ALL_CHAR";

export const getThemAll = () => {
  try {
    return async (dispatch) => {
      const data = await axios.get(
        "http://localhost:3001/rickandmorty/character"
      );
      console.log(data);
      return dispatch({
        type: GET_ALL_CHAR,
        payload: data,
      });
    };
  } catch (error) {}
};

// ACTION | addFav
export const addFav = (character) => {
  const { id } = character;
  // try {
  //   const endpoint = "http://localhost:3001/rickandmorty/fav";
  //   return async (dispatch) => {
  //     const { data } = await axios.post(endpoint, character);
  //     return dispatch({
  //       type: ADD_FAV,
  //       payload: data,
  //     });
  //   };
  // } catch (error) {
  //   console.log(error);
  // }
  return { type: ADD_FAV, payload: id };
};
export const getFavs = () => {
  // try {
  //   return async (dispatch) => {
  //     const { data } = await axios.get(
  //       `http://localhost:3001/rickandmorty/fav`
  //     );
  //     return dispatch({
  //       type: GET_FAV,
  //       payload: data,
  //     });
  //   };
  // } catch (error) {
  //   console.log(error);
  // }
  return { type: GET_FAV };
};

export const removeFav = (id) => {
  //   try {
  //     const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  //     return async (dispatch) => {
  //       const { data } = await axios.delete(endpoint);
  //       console.log({ data });
  //       return dispatch({
  //         type: REMOVE_FAV,
  //         payload: data,
  //       });
  //     };
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return { type: REMOVE_FAV, payload: id };
};

export function orderFavorites(order) {
  console.log(order + 1);
  return {
    type: ORDER,
    payload: order,
  };
}

export function filterFavorites(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function resetFavorites() {
  return {
    type: RESET,
  };
}

export function removeComponentFav(id) {
  return {
    type: REMOVE_COMPONENT_FAV,
    payload: id,
  };
}
