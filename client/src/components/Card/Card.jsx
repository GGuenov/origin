import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { addFav, removeFav } from "../../Redux/actions";
import style from "./Card.module.css";

function Card(character) {
  const navigate = useNavigate();
  const { image, name, id, onClose, addFav, removeFav, favorites } = character;
  console.log(id);
  console.log(character);
  console.log(favorites);
  const [closeBtn, setCloseBtn] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (!onClose) {
      setCloseBtn(false);
    }
  }, [onClose]);

  useEffect(() => {
    favorites.forEach((fav) => {
      if (fav.id === id) {
        setFav(true);
      }
    });
  }, [favorites]); //el gatillo de actualizacion del 'useEffect'

  function navigateHandler() {
    navigate(`/detail/${id}`);
  }

  function handleFavorite(character) {
    if (!fav) {
      addFav(character);
      setFav(true);
    } else {
      removeFav(character);
      setFav(false);
    }
  }

  return (
    <div className={style.container}>
      <div className={style.image}>
        {fav ? (
          <button onClick={() => handleFavorite(id)}>❤️</button>
        ) : (
          <button onClick={() => handleFavorite(character)}>🤍</button>
        )}
        {closeBtn && (
          <button
            className={style.buttonContainer}
            onClick={() => {
              onClose(id);
            }}
          >
            X
          </button>
        )}
        <img
          className={style.image}
          src={image}
          alt={name}
          onClick={navigateHandler}
        />
      </div>

      <div className={style.dataContainer}>
        <h2>{name}</h2>
        <p>Clickea en la imagen para más detalles</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),

    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    favorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
