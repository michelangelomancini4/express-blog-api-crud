// prepariamo tutte le funzioni necessarie 
// copiamo in ciascuna la logica delle funzioni che attualmente si trovano nel router (al momento restituiscono solo dei messaggi).

// importo menu
const menu = require('../data/postsarray'); 


function index(req, res) {
// copiamo la logica dell'index
res.json(menu)

}
function show(req, res) {
// copiamo la logica della show
const id = parseInt(req.params.id)

// cerchiamo il piatto tramite id
const piatto = menu.find(piatto => piatto.id === id);
// Restituiamolo sotto forma di JSON
res.json(piatto);

}
function store(req, res) {
// copiamo la logica della store
res.send(`crea/aggiungi ${req.params}`)

}
function update(req, res) {
// copiamo la logica dell'update
res.send(`modifica ${req.params.id}`);

}
function destroy(req, res) {
// copiamo la logica della destroy..
res.send(`cancella ${req.params.id}`);

}
// esportiamo tutto
module.exports = { index, show, store, update, destroy }

console.log('ciao');
