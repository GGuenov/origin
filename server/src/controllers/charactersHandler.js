const { getAllCharacters } = require("./getCharById");

const getAllCharactersHandler = async () => {
  try {
    const response = await getAllCharacters();
    return response;
  } catch (error) {
    console.log(error);
  }
};
module.exports = { getAllCharactersHandler };
