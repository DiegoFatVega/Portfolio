const express = require('express')

const games = require('./data/games.json')
const app = express()
app.use(express.json())//usa il metodo json di express

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
    //cerchi in base all'indice e lo salvi in una variabile
    const gameIndex = games.findIndex(game => game.id === id) //se non trova -1
    //controlli se la ricerca è andata a buon fine
    if (gameIndex === -1) {
        return res.status(404).json({
            error: "il Gioco che vuoi cancellare non esiste"
        })
    }
    //salvi il gioco che stai per cancellare
    const deletedGame = games[gameIndex]
    //cancelli il gioco
    games.splice(gameIndex, 1)

    return res.status(200).json({
        message: `Il gioco ${deletedGame.title} è stato cancellato`
    })

})

//Rotta POST
app.post("/games", (req, res) => {
    const body = req.body //corpo della richiesta
    if (!body.title) {
        return res.status(400).json({
            message: "Attenzione! il campo titolo è obbligatorio"
        })
    }
    const newGameId = games[games.length - 1].id + 1 //genero id automaticamente
    const newGame = {
        id: newGameId,
        ...body
    }
    games.push(newGame)
    res.status(201).json({
        message: "gioco aggiunto con successo",
        game: newGame
    })

})

//Rotta PUT
app.put("/games/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    const gameIndex = games.findIndex(game => game.id === id)

    if (gameIndex === -1) {
        return res.status(404).json({
            error: "il Gioco che vuoi modificare non esiste"
        })
    }
    if (!body.title) {
        return res.status(400).json({
            message: "Attenzione! il campo titolo è obbligatorio"
        })
    }
    const updatedGame = {
        id,
        ...body
    }

    games.splice(gameIndex, 1, updatedGame)

    return res.status(200).json({
        message: `Il gioco "${updatedGame.title}" è stato aggiornato`
    })
})

//rotta PATCH
app.patch("/games/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const body = req.body
    const gameIndex = games.findIndex(game => game.id === id)

    if (gameIndex === -1) {
        return res.status(404).json({
            error: "il Gioco che vuoi modificare non esiste"
        })
    }

    const updatedGame = {
        ...games[gameIndex],
        ...body,
        id
    }
    games.splice(gameIndex, 1, updatedGame)

    return res.status(200).json({
        message: `Il gioco "${updatedGame.title}" è stato modificato con successo`,
        game: updatedGame
    })
})
//alla fine.
app.listen(port, () => console.log(`app Listen on port ${port}`))
