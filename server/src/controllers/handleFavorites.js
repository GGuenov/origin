let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  // console.log(id);
  // console.log(33333);
  const deleteCharacter = myFavorites.filter(
    (character) => character.id !== Number(id)
  );
  // console.log(deleteCharacter);
  myFavorites = deleteCharacter;
  res.status(200).json(myFavorites);
};
const getFav = async (req, res) => {
  console.log(myFavorites);
  console.log(4444444);
  if (myFavorites) return myFavorites;
  res.status(500).json([]);
};

module.exports = { postFav, deleteFav, getFav };
