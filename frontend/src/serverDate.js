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
app.listen(port, hostname,() => console.log("Server Running..."));


