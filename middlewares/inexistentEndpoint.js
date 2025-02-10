// Esercizio
// completiamo le nostre API inserendo un middleware per la gestione delle rotte non registrate e uno per la gestione degli errori.
// Se viene chiamato un endpoint inesistente, un middleware dovrà rispondere un messaggio e uno status appropriato.


// Facciamo il controllo
function inexistentEndpoint (req, res, next) {
    //Imposto lo status 404
    res.status(404).json({
        error: "Non Trovato",
        message: "Endpoint inesistente"
        })
   
    }


// Esporto il middleware
module.exports = inexistentEndpoint;

