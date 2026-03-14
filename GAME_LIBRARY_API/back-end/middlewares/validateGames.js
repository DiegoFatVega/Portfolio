function validateGames(req, res, next) {
    const body = req.body
    if (!body.title) {
        return res.status(400).json({
            error: "Il campo titolo è obbligatorio"
        })
    }
    next()
}

module.exports = validateGames