function errorsHandler(err, req, res, next) {
    console.log("Errore rilevato: "+err.message)
    res.status(500)
    res.json({
    error: "Internal Server Error"
    });
};
module.exports = errorsHandler;