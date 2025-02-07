// console log di prova
console.log('app.js si  avvia correttamente!');

// importazione express
const express = require('express')

// inizializzazione express
const app = express()

// importo array con menu
const menu = require('./data/postsarray');

// registrazione body-parser
app.use(express.json());


app.post('/', (req, res) => {
  console.log(req.body);
  
  })

// Importazione routers/posts.js
const postsRouter = require('./routers/posts');


//registrazione path delle rotte e istanza router
app.use('/posts', postsRouter);

// impostazione porta
const port = 5000



  // configurazione asset statico
  app.use(express.static('public'));

  

// impostazione rotta principale
app.get('/', (req, res) => {
res.send('Server del tuo blog!!!')
})

// rotta per la bacheca
app.get("/bacheca", (req, res) => {
    res.json(menu);
  });



// avvio server mettendolo in ascolto sulla porta indicata
app.listen(port, () => {
console.log(`Server in ascolto sulla porta: ${port}`)
})




