module.exports = app => {
    const history = require("../controllers/history.controller.js");
  
    var router = require("express").Router();
  
    // Create a new History
    router.post("/", history.create);
  
    // Retrieve all History
    router.get("/", history.findAll);
  
    app.use('/api/history', router);
  };