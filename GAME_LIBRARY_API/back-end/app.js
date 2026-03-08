const express = require('express')

const games = require('./data/games.json')
const app = express()

const port = 3000

//rotta index
app.get("/games", (req, res) => res.json(games))


//rotta Show
app.get("/games/:id", (req, res) => {
    //prendere id
    const id = parseInt(req.params.id)
    const game = games.find(game => game.id === id)
    if (!game) {
        return res.status(404).json({
            error: "il Gioco che hai cercato non esiste"
        })
    }
    res.json(game)
})

//alla fine.
app.listen(port, () => console.log(`app Listen on port ${port}`))
