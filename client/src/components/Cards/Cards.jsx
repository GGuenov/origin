import style from "./Cards.module.css";
import Card from "../Card/Card.jsx";

export default function Cards(props) {
  const { characters, onClose } = props;
  console.log(props);
  //props es un objeto: props={characters=[---]}
  return (
    //el style in situ va con doble llaves. Una porque es en javascript, y otra porque es en formato objeto.
    <div className={style.deploy}>
      {characters.map((character) => (
        <Card
          id={character.id}
          key={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin?.name}
          image={character.image}
          onClose={() => onClose(character.id)}
        />
      ))}
    </div>
  );
}
