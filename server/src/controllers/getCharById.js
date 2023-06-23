const axios = require("axios");
//const { response } = require("express");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios(URL + id);

    const { status, name, species, origin, image, gender } = data;
    const character = { id, status, name, species, origin, image, gender };

    name ? res.status(200).json(character) : res.status(404).send("Not found");
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getCharById };
