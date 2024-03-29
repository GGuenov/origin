const express = require("express");
const router = express.Router();

const { getCharById } = require("../controllers/getCharById");
const { login } = require("../controllers/login");
const { getAllCharactersHandler } = require("../controllers/charactersHandler");
const {
  postFav,
  deleteFav,
  getFav,
} = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/character", getAllCharactersHandler);
router.get("/login", login);
router.post("/fav", postFav);
router.get("/fav", getFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
