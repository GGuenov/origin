import React from "react";
import styles from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav({ onSearch, random }) {
  return (
    <div>
      <NavLink to="/home">
        <button className={styles.buttoms}>Casa</button>
      </NavLink>
      <NavLink to="/about">
        <button className={styles.buttoms}>Sobre</button>
      </NavLink>
      <NavLink to="/favorites">
        <button className={styles.buttoms}>Favs</button>
      </NavLink>
      <SearchBar onSearch={onSearch} />
      <button className={styles.buttoms} onClick={random}>
        Aleatorio
      </button>
    </div>
  );
}

//otra forma de hacer el boton:
//<button as={Link} to="/home"></button>
