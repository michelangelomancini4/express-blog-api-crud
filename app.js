// console log di prova
console.log('app.js si hhh avvia correttamente!');

// importazione express
const express = require('express')

// inizializzazione express
const app = express()

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
    res.json(dolci);
  });



// avvio server mettendolo in ascolto sulla porta indicata
app.listen(port, () => {
console.log(`Server in ascolto sulla porta: ${port}`)
})

// array con lista dolci
const dolci = [
    {
      id: 1,
      titolo: "ciambellone",
      contenuto: "ciambellone al cioccolato",
      immagine: "/images/post1.jpg",
      tags: ["ciambellone", "cioccolata"],
    },
    {
      id: 2,
      titolo: "cracker barbabietola",
      contenuto: "cracker con impasto di barbabietola",
      immagine: "/images/post2.jpg",
      tags: ["cracker ", "barbabietola"],
    },
    {
      id: 3,
      titolo: "pane fritto dolce",
      contenuto: "pane fritto con zucchero",
      immagine: "/images/post3.jpg",
      tags: ["pane", "zucchero"],
    },
    {
      id: 4,
      titolo: "pasta barbabietola",
      contenuto: "pasta barbabietola e limone",
      immagine: "/images/post4.jpg",
      tags: ["pasta", "barbabietola"],
    },
    {
      id: 5,
      titolo: "torta paesana",
      contenuto: "torta ai mirtilli verdi",
      immagine: "/images/post5.jpg",
      tags: ["torta", "greenberry"],
    }
  ];
  
