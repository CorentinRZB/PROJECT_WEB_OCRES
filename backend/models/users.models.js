const mongoose = require('mongoose');


//Definition du schema pour le user model
var UserSchema = new mongoose.Schema({
    id: String,
    firstname: String,
    lastname: String,
    email: {
      type : String,
      required : true,
    },
    password: {
      type : String,
      reqiuired : true,
    },

  });
  
  //creation du user model
  const User = mongoose.model("User", UserSchema);
  module.exports = User;
  
  /*
  //REQUETE GET MONGO API
  app.get("/users", function(req,res){
    User.find(function(err,users){
      if(err){
        res.send(err);
      }
      res.json(users);
    }); 
  });
  
  //REQUETE POST MONGO API
  app.post("/users", function(req,res){
    User.create(function(err,user){
      if(err){
        res.send(err);
      }
      res.json(users);
    }); 
  });
  
  
  //REQUETE GET BY ID MONGO API
  app.get("/users/:id", function(req,res){
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