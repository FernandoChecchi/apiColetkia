const { db, Persona } = require("../db");
const { Op } = require("sequelize");

// Create and Save a new Person
exports.createPerson = (req, res) => {
  const {name, description, image} = req.body
  // const image = req.body.image ? req.body.image : false
 
  Persona.findOrCreate({ where: { name, description, image } }) 

    .then((persona) => {
      res.status(201).send(persona);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
};

// Retrieve all Persons from the database.
exports.findAllPerson = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
  Persona.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving persons."
      });
    });
};

// Find a single Person with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Persona.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Person with id=" + id
      });
    });
};

// Update a Person by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Persona.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Persona was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Persona with id=${id}. Maybe Persona was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Persona with id=" + id
      });
    });
};

// Delete a Person with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Persona.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Persona was deleted successfully!"
        });
      } else {
        res.send({
            message: `Cannot delete Persona with id=${id}. Maybe Persona was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Persona with id=" + id
      });
    });
  
};