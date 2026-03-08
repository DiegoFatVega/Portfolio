const express = require('express')

const games = require('./data/games.json')
const app = express()

const port = 3000

//server

app.get("/games", (req, res) => res.json(games))

console.log("Ciao")
app.listen(port, () => console.log(`app Listen on port ${port}`))