const express = require("express");
const cors = require("cors");
const fs = require("fs");

// définition paramètre serveur
const hostname ='localhost';
const port = 3000;

//création de l'app
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//démarrer le serveur
app.listen(port, () => console.log("Server Running..."));

const pollData = require("../src/data.json");
app.get("/poll", function (req, res) {
  res.send(pollData);
});

app.post("/poll", function (req, res) {  
    if (req.body) {
      fs.writeFileSync("data.json", JSON.stringify(req.body));
      res.send({
        message: "Data Saved",
      });
    } else {
      res.status(400).send({
        message: "Error No Data",
      });
    }
  });

  const dateData = require("../src/date.json");
  app.get('/date', function (req, res) {
    res.send(dateData);
  });

  //const {google} = require('googleapis')
  
