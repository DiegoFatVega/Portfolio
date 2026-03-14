const express = require('express')

const router = express.Router()
//const games = require("../data/games.json")

const gamesController = require("../controllers/gamesController");

const checkId = require("../middlewares/checkId");
const validateGames = require("../middlewares/validateGames")



router.get("/", gamesController.index)

router.get("/:id", checkId, gamesController.show)

router.post("/", validateGames, gamesController.store)

router.delete("/:id", checkId, gamesController.destroy)

router.put("/:id", checkId, validateGames, gamesController.update)

router.patch("/:id", checkId, gamesController.modify)

module.exports = router
