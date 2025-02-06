const express = require ('express')
const router = express.Router();

// importo il controller
const postsController = require('../controllers/menucontroller');

// rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)

   // index
  router.get('/', postsController.index) ;

   // show
   router.get('/:id', postsController.show) ;


   // create
   router.patch('/', postsController.store) ;


  // update
  router.put('/:id', postsController.update) ;


  // delete
  router.delete('/:id', postsController.destroy) ;


// esporto router
module.exports = router;

// console log di prova
console.log('posts.js si avvia correttamente!');

