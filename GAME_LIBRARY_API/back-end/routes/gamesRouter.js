const express = require('express')

const router = express.Router()
const games = require("../data/games.json")

const gamesController = require("../controllers/gamesController")

router.get("/", gamesController.index)

router.get("/:id", gamesController.show)

router.post("/", gamesController.store)

router.delete("/:id", gamesController.destroy)

router.put("/:id", gamesController.update)

router.patch("/:id", gamesController.modify)

module.exports = router
