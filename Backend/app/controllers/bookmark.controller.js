const db = require("../models");
const Bookmark = db.bookmarks;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Bookmark
    const bookmark = {
      title: req.body.title
    };
  
    // Save Bookmark in the database
    Bookmark.create(bookmark)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Bookmark."
        });
      });
  };

// Retrieve all Bookmarks from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Bookmark.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving bookmarks."
        });
      });
  };
