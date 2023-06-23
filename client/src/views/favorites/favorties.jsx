//import {connect} from "react-redux";
import Cards from "../../components/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import {
  orderFavorites,
  filterFavorites,
  resetFavorites,
} from "../../Redux/actions";

export default function Favorites(myFavorites, closeHandler) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorites);

  function handleSort(e) {
    dispatch(orderFavorites(e.target.value));
  }

  function handleFilter(e) {
    dispatch(filterFavorites(e.target.value));
  }

  function handleReset() {
    dispatch(resetFavorites());
  }

  return (
    <div>
      <select placeholder="Gender" onChange={handleFilter}>
        {["Todxs", "Male", "Female", "unknown", "Genderless"].map((gender) => (
          <option value={gender}>{gender}</option>
        ))}
      </select>
      <select placeholder="Orden" onChange={handleSort}>
        {["Toca Toca", "Ascendente", "Descendente"].map((order) => (
          <option value={order}>{order}</option>
        ))}
      </select>
      <button onClick={handleReset}>Resetear Filtros</button>
      <Cards characters={favorites} onClose={closeHandler} />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     favorites: state.myFavorites,
//   };
// };

// export default connect(mapStateToProps, null)(Favorites);
