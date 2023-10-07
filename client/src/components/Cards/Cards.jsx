import style from "./Cards.module.css";
import Card from "../Card/Card.jsx";

export default function Cards(props) {
  const { characters, onClose } = props;
  console.log(props);
  return (
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
