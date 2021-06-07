const express = require("express");
const router = express.Router();
const Controller = require('../controllers/ControllersPersona');


router.get('/', Controller.findAllPerson);

router.post('/nuevo', Controller.createPerson);

router.get('/:id', Controller.findOne);

router.put("/:id", Controller.update);

router.delete('/:id', Controller.delete);


module.exports = router;