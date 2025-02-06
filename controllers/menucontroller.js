// importazione menu
const menu = require('../data/postsarray'); 


function index(req, res) {
// logica index
res.json(menu)

}
function show(req, res) {
// logica  show
const id = parseInt(req.params.id)

// cerchiamo il piatto tramite id
const piatto = menu.find(piatto => piatto.id === id);
// Restituiamolo sotto forma di JSON
res.json(piatto);

}
function store(req, res) {
// logica  store
res.send(`crea/aggiungi ${req.params}`)

}
function update(req, res) {
//  logica update
res.send(`modifica ${req.params.id}`);

}
function destroy(req, res) {
// logica  destroy
const id = parseInt(req.params.id)

// cerchiamo il piatto tramite id
const piatto = menu.find(piatto => piatto.id === id);

// Facciamo il controllo
    if(!piatto){
        //Imposto lo status 404
        res.status(404)
        // Restituisco un JSON con le altre informazioni
    return res.json({
        error: "Non Trovato",
        message: "Piatto non trovato"
        })
        }
 res.json(piatto);

}

// esportiamo tutto
module.exports = { index, show, store, update, destroy }


