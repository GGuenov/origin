import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import { useDispatch } from "react-redux";
import Nav from "./components/nav/Nav";
import { removeFav } from "./Redux/actions";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./views/favorites/favorties";
import ErrorPage from "./views/error/errorPage";

//import SearchBar from './components/SearchBar/SearchBar';

function App() {
  //creo un estado...
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function login(userData) {
    const { username, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?username=${username}&password=${password}`).then(
      ({ data }) => {
        const { access } = data;
        setAccess(data);
        access && navigate("/home");
      }
    );
  }

  // function login(userData) {
  //   if (userData.password === password && userData.username === username) {
  //     setAccess(true);
  //     navigate("/home");
  //   }
  // }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function searchHandler(id) {
    // setCharacters([...characters, example]);

    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  function closeHandler(id) {
    let deleted = characters.filter((character) => character.id !== Number(id));

    dispatch(removeFav(id));

    setCharacters(deleted);
  }

  function randomHandler() {
    let haveIt = [];
    //Generate random number
    let random = (Math.random() * 826).toFixed();

    //Coerce to number by boxing
    random = Number(random);

    if (!haveIt.includes(random)) {
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    } else {
      console.log("Ya agregaste todos los personajes");
      return false;
    }
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" ? (
        <Nav onSearch={searchHandler} random={randomHandler} />
      ) : null}

      <Routes>
        <Route exact path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={closeHandler} />}
        />

        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
