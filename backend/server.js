const express=require("express");
const cors = require("cors");
const fs = require("fs");

// Définition paramètres serveur
const hostname ='localhost';
const port = 3000;

// Création de l'app
const app = express();
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Démarrage du serveur
app.listen(port, () => console.log("Server Running on port 3000..."));

// REQUETE GET SONDAGES
const pollData = require("./data.json");
app.get("/poll", function (req, res) {
  res.send(pollData);
});

// REQUETE POST SONDAGES
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

// REQUETE GET STRUCTURE
const structureData = require("./structure.json");
  app.get("/structure", function (req, res) {
    res.send(structureData);
  });
  
// REQUETE POST STRUCTURE
  app.post("/structure", function (req, res) {  
    if (req.body) {
      fs.writeFileSync("structure.json", JSON.stringify(req.body));
      res.send({
        message: "Data Saved",
      });
    } else {
      res.status(400).send({
        message: "Error No Data",
      });
    }
  });

  // REQUETE GET DECOMPTE
  const dateData = require("./date.json");
  app.get('/date', function (req, res) {
    res.send(dateData);
  });




  /////partie connection mongoose à la base de donnée mongo
const mongoose = require('mongoose');
const app2 = express();
const UsersModel = require("./models/users.models");

app2.use(express.json());

//changer url et mettre celui de mongo atlas
mongoose.connect("mongodb+srv://ecepoker:ece2021@crud.fnkos.mongodb.net/users?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
}
);

app2.get("/", async (req,res) => {
  const users = new UsersModel({email: "coco@gmail.com", password: "ECE"});

  try{
    await users.save();
    res.send("inserted data");
  }catch(err){
    console.log(err);
  }
});

app2.listen(3001, () => {
  console.log("Server running on port 3001...");
});

/*
//REQUETE GET MONGO API
app2.get("/users", function(req,res){
  User.find(function(err,users){
    if(err){
      res.send(err);
    }
    res.json(users);
  }); 
});

//REQUETE POST MONGO API
app2.post("/users", function(req,res){
  User.create(function(err,user){
    if(err){
      res.send(err);
    }
    res.json(users);
  }); 
});


//REQUETE GET BY ID MONGO API
app2.get("/users/:id", function(req,res){
  User.findById(req.params.id,function(err,user){
    if(err){
      res.send(err);
    }
    res.json(user);
  }); 
});

//REQUETE PUT BY ID MONGO API
app2.put("/users/:id", function(req,res){
  User.findByIdAndUpdate(req.params.id,req.body, function(err,user){
    if(err){
      res.send(err);
    }
    res.json(user); 
  }); 
});

//REQUETE DELETE BY ID MONGO API
app2.delete("/users/:id", function(req,res){
  User.findByIdAndRemove(req.params.id,req.body, function(err,user){
    if(err){
      res.send(err);
    }
    res.json(user); 
  }); 
});

*/


  
