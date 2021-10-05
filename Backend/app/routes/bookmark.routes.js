module.exports = app => {
    const bookmarks = require("../controllers/bookmark.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Bookmark
    router.post("/", bookmarks.create);
  
    // Retrieve all Bookmarks
    router.get("/", bookmarks.findAll);
  
    app.use('/api/bookmarks', router);
  };