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
    //cerca e salva 
    const game = games.find(game => game.id === id)
    //controlla se esiste
    if (!game) {
        return res.status(404).json({
            error: "il Gioco che hai cercato non esiste"
        })
    }
    res.json(game)
})

//rotta Delete
app.delete("/games/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const gameIndex = games.findIndex(game => game.id === id) //se non trova -1
    if (gameIndex === -1) {
        return res.status(404).json({
            error: "il Gioco che vuoi cancellare non esiste"
        })
    }
    const deletedGame = games[gameIndex]
    games.splice(gameIndex, 1)

    return res.status(200).json({
        message: `Il gioco ${deletedGame.title} è stato cancellato`
    })

})

//alla fine.
app.listen(port, () => console.log(`app Listen on port ${port}`))
