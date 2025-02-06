const express = require ('express')
const router = express.Router();

// importo il controller
const postsController = require('../controllers/menucontroller');

// rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

   // index
  router.get('/', (req, res) => {
    res.send('lista dei post')
    });

   // show
  router.get('/:id', (req, res) => {
    res.send(`mostra dettagli ${req.params.id}`)
    });

   // create
  router.post('/', (req, res) => {
    res.send(`crea/aggiungi ${req.params}`)
    });

  // update
  router.put('/:id', (req, res) => {
    res.send(`modifica ${req.params.id}`);
});

  // delete
  router.delete('/:id', (req, res) => {
    res.send(`cancella ${req.params.id}`);
});

// esporto router
module.exports = router;

// console log di prova
console.log('posts.js si avvia correttamente!');

