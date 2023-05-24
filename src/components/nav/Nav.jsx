import React from "react";
import styles from './Nav.module.css';
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";

export default function Nav(props){
    return (
        <div>
        <NavLink to="/home">
            <button className={styles.buttoms}>Home</button>
        </NavLink>
        <NavLink to="/about">
            <button className={styles.buttoms} >About</button>
        </NavLink>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

//otra forma de hacer el boton:
//<button as={Link} to="/home"></button>