const express = require("express");
const app = express();
const port = 3000;

const listOfPosts = [
  {
    titolo: "Ciambellone",
    contenuto: "Ciambellone golosone",
    immagine: "./ciambellone.jpeg",
    tags: ["cibo", "buono", "seguimi"],
  },
  {
    titolo: "Cracker barbabietola",
    contenuto: "Cracker barbabietola fatti in casa!",
    immagine: "./cracker_barbabietola.jpeg",
    tags: ["cibo", "buono", "seguimi"],
  },
  {
    titolo: "Pane Fritto Dolce",
    contenuto: "Pane Fritto Dolce buonissimo",
    immagine: "./pane_fritto_dolce.jpeg",
    tags: ["cibo", "buono", "seguimi"],
  },
  {
    titolo: "Pasta Barbabietola",
    contenuto: "Pasta super buona, non ne hai mai mangiata una così!",
    immagine: "./pasta_barbabietola.jpeg",
    tags: ["cibo", "buono", "seguimi"],
  },
  {
    titolo: "Torta Paesana",
    contenuto: "Torta strepitosa, ricetta rubata alla nonna",
    immagine: "./torta_paesana.jpeg",
    tags: ["cibo", "buono", "seguimi"],
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const result = [];
  result.push(listOfPosts);
  result.push(listOfPosts.length);
  res.json(result);
});

app.listen(port, () => {
  console.log(`App Express listening on port ${port}`);
});
