import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button onClick={props.onClose}>X</button>
      </div>

      <div className={styles.dataContainer}>
        <h2>Nombre: {props.name}</h2>
        <Link to={`/detail/${props.id}`}>
          <h3>Detalles</h3>
        </Link>
        <h4>Estatus: {props.status}</h4>
        <h4>Especie: {props.species}</h4>
        <h4>Genero: {props.gender}</h4>
        <h4>Origen: {props.origin}</h4>
      </div>
      <img className={styles.image} src={props.image} alt="Imagen" />
    </div>
  );
}

//name: nombre.
//status: status.
//species: especie.
//gender: género.
//origin: origen (ten en cuenta que el nombre del origen viene dentro de otra propiedad llamada name).
//image: imagen.
//Además, cuando el usuario haga click en la X de "cerrar", debe ejecutarse una función que también viene como props //llamada onClose.
