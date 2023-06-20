import styles from "./Detail.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//import "./detail.css";

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
      <div>
        <Link to="/home">
          <button className={styles.button}>Volver!</button>
        </Link>
      </div>
      <div className={styles.container}>
        <h1>Detail:</h1>
        <h2>{character.name}</h2>
        {console.log(character)}
        <h3>Id | {character.id}</h3>
        <h3>Estatus | {character.status}</h3>
        <h3>Origen | {character.origin?.name}</h3>
        <h3>Especie | {character.species}</h3>
        <h3>Genero | {character.gender}</h3>
      </div>
    </div>
  );
}
export default Detail;
