import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/nav/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
//import SearchBar from './components/SearchBar/SearchBar';

function App() {
  //creo un estado...
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = "yo@bbaa.com";
  const password = "123456";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    ); // lo transformo a numer porque id es un string
  };
  const location = useLocation();
  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} /> : null}

      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
//<Card
//id={Rick.id}
//name={Rick.name}
//status={Rick.status}
//species={Rick.species}
//gender={Rick.gender}
//origin={Rick.origin.name}
//image={Rick.image}
//onClose={() => window.alert('Emulamos que se cierra la card')}
///>
