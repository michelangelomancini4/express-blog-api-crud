// importazione menu
const menu = require('../data/postsarray'); 

// logica INDEX
function index(req, res) {

res.json(menu)
}

// logica  SHOW
function show(req, res) {

const id = parseInt(req.params.id)

// cerchiamo il piatto tramite id
const piatto = menu.find(piatto => piatto.id === id);
// Restituiamolo sotto forma di JSON
res.json(piatto);

}

// logica  STORE
function store(req, res) {


    // Creiamo un nuovo id 
    const newId = menu[menu.length - 1].id + 1;

    // Creiamo un nuovo piatto estrapolando i dati di req.body
    const nuovoPiatto= {
    id: newId,
    name: req.body.title,
    image: req.body.image,
    ingredients: req.body.tags
    }
    // Aggiungiamo il nuovo piatto al menu
    menu.push(nuovoPiatto);

    // controlliamo nel terminale
    console.log("menu aggiornato:", menu);

    // Restituiamo lo status corretto e il piatto nuovo
    res.status(201);
    res.json(nuovoPiatto);

}


//  logica UPDATE
function update(req, res) {

res.send(`modifica integrale ${req.params.id}`);

}

// logica  DESTROY
function destroy(req, res) {

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


