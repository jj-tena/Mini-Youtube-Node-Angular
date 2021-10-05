const db = require("../models");
const History = db.history;
const Op = db.Sequelize.Op;

// Create and Save a new History
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a History
    const history = {
      title: req.body.title,
      embedLink: req.body.embedLink,
    };
  
    // Save History in the database
    History.create(history)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the History."
        });
      });
  };

// Retrieve all History from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    History.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving history."
        });
      });
  };
