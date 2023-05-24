import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Detail(props) {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  console.log(character.image);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${detailId}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <div>
        <Link to="/home">
          <button>Volver!</button>
        </Link>
      </div>
      <div className={styles.container}>
        <h1>Detail</h1>
        <h2>{character.name}</h2>
        <img
          className={styles.image}
          src={character.image}
          alt={character.name}
        />
        <h3>Origin | {character.origin?.name}</h3>
        <h3>Specie | {character.species}</h3>
        <h3>Gender | {character.gender}</h3>
      </div>
    </div>
  );
}
