const express = require('express')
const cors = require('cors')

const gamesRouter = require("./routes/gamesRouter")

const app = express()
app.use(cors());

app.use(express.json())//usa il metodo json di express

const port = 3000
app.get("/", (req, res) => res.send("<h1> Benvenuto nella back-end di games API </h1>"));

app.use("/games", gamesRouter) //intercetta tutto dopo lo "/" a differenza del get

app.use((req, res) => res.status(404).send("<h1> Rotta non trovata </h1>"))

app.listen(port, () => console.log(`app Listen on port ${port}`))
