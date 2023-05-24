import Card from "../Card/Card.jsx";

export default function Cards(props) {
  const { characters, onClose } = props;
  //props es un objeto: props={characters=[---]}
  return (
    //el style in situ va con doble llaves. Una porque es en javascript, y otra porque es en formato objeto.
    <div style={{ display: "flex", justifyContent: "space-around" }}>
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
          onClose={() => props.onClose(character.id)}
        />
      ))}
    </div>
  );
}
