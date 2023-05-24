import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
   
   const [id, setId] = useState("");
   const handleChange = event => {
      const {value} = event.target;
      setId(value);//lo pisa entero. no le va sumando el ultimo caracter cada vez
   }
   return (
      <div className={styles.container}>
          <input type='search'
                 name="search"
                 id="search"
                 onChange={handleChange}
          />
         <button onClick={() => props.onSearch(id)}>Agregar</button> 
      </div>
   );
}
//el button call backea la ejecucion de onSearch en 'id'. en vez de ejecutar el id???