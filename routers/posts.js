const express = require ('express')
const router = express.Router();

// importo il controller
const postsController = require('../controllers/menucontroller');

// rotte per le operazioni CRUD (Index, Show, store, Create, Update e Delete)

   // index
  router.get('/', postsController.index) ;

   // show
   router.get('/:id', postsController.show) ;

  
   // store
   router.post('/', postsController.store) ;


  // update
  router.put('/:id', postsController.update) ;



  
  // destroy
  router.delete('/:id', postsController.destroy) ;


// esporto router
module.exports = router;

// console log di prova
console.log('posts.js si avvia correttamente!');

