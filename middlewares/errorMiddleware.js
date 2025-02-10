// Esercizio
// Se viene generato un errore, un middleware si occuperà di rispondere con un messaggio e uno status appropriato.


// Facciamo il controllo
function genError (err, req, res, next) {
    //Imposto lo status 500
    res.status(500).json({
        error: "errore",
        message: "errore - i dati inseriti non sono corretti: ricontrolla"
        });
   
    }


// Esporto il middleware
module.exports = genError;

